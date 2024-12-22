import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';

import { PAGE_SIZE } from '@/constants/common';
import { HOUSEWORK_STATUS } from '@/constants/homePage';
import { IncompleteScoreResponse } from '@/types/apis/houseworkApi';

import { changeHouseworkStatus } from '@/services/housework/changeHouseworkStatus';
import { deleteHousework } from '@/services/housework/deleteHouswork';
import { getGroupUser } from '@/services/group/getGroupUser';
import { getHouseworks } from '@/services/housework/getHouseworks';
import { getMyGroup } from '@/services/group/getMyGroup';
import { getMyInfo } from '@/services/user/getMyInfo';
import { getWeeklyIncomplete } from '@/services/housework/getWeeklyIncomplete';
import { postCompliment } from '@/services/noticeManage/postCompliment';
import { postPoke } from '@/services/noticeManage/postPoke';

import GroupSelectSheet from '@/components/home/GroupSelectSheet/GroupSelectSheet';
import HomeHeader from '@/components/home/HomeHeader/HomeHeader';
import HouseworkList from '@/components/home/HouseworkList/HouseworkList';
import NoList from '@/components/home/NoList/NoList';
import WeeklyDateAndTab from '@/components/home/WeeklyDateAndTab';
import useHomePageStore from '@/store/useHomePageStore';

const HomePage: React.FC = () => {
  const {
    setCurrentGroup,
    setGroups,
    activeDate,
    homePageNumber,
    activeTab,
    setActiveTab,
    myInfo,
    setMyInfo,
    setCurrWeek,
    weekText,
    setWeekText,
  } = useHomePageStore();
  const { channelId } = useParams();
  const [chargers, setChargers] = useState<{ name: string }[]>([{ name: '전체' }]);
  const { data: houseworks, refetch } = useQuery({
    queryKey: ['houseworks', channelId, activeDate],
    queryFn: async () => await fetchHouseworks(activeDate),
    refetchOnWindowFocus: true,
  });
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMyGroups = async () => {
      const getMyGroupResult = await getMyGroup();
      const myGroups = getMyGroupResult.result.channelList;
      setGroups(myGroups);
      if (channelId) {
        const currentGroup = myGroups.find(group => group.channelId === Number(channelId));
        setCurrentGroup(currentGroup!);
      }
    };

    const fetchMyInfo = async () => {
      const myInfoResult = await getMyInfo();
      setMyInfo(myInfoResult.result);
    };

    setWeekText(weekText);
    fetchMyGroups();
    fetchMyInfo();
  }, []);

  useEffect(() => {
    const fetchGroupUsers = async () => {
      if (!channelId) return;
      const newChannelId = Number(channelId);
      const getGroupUsersResult = await getGroupUser({ channelId: newChannelId });
      const newChargers = [
        { name: '전체' },
        ...Array.from(new Set(getGroupUsersResult.result.userList.map(user => user.nickName))).map(
          charger => ({ name: charger })
        ),
      ];
      setChargers(newChargers);
    };

    fetchGroupUsers();
  }, [channelId]);

  const fetchHouseworks = async (date: string) => {
    const newChannelId = Number(channelId);
    const getHouseworksResult = await getHouseworks({
      channelId: newChannelId,
      targetDate: date,
      pageNumber: homePageNumber,
      pageSize: PAGE_SIZE,
    });
    return getHouseworksResult.result.responses;
  };

  const handleAction = async (houseworkId: number) => {
    const targetHousework = houseworks?.find(housework => housework.houseworkId === houseworkId);
    const newChannelId = Number(channelId);

    if (targetHousework?.userId === myInfo?.userId) {
      await changeHouseworkStatus({
        channelId: newChannelId,
        houseworkId,
      });
      refetch();
      const currWeekResult = await getWeeklyIncomplete({
        channelId: newChannelId,
        targetDate: activeDate,
      });
      const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
      const newWeekDates = (weekData: IncompleteScoreResponse[]) => {
        return weekData.map(data => {
          const date = new Date(data.date);
          const weekdayIndex = date.getDay();
          const day = weekdays[weekdayIndex];

          return {
            ...data,
            day,
          };
        });
      };

      setCurrWeek(newWeekDates(currWeekResult.result.incompleteScoreResponses));
    } else {
      if (targetHousework?.status === HOUSEWORK_STATUS.COMPLETE) {
        await postCompliment({
          channelId: newChannelId,
          targetUserId: targetHousework.userId,
          reactDate: targetHousework.startDate,
        });
        toast({ title: `${targetHousework.assignee}님을 칭찬했어요` });
      } else {
        await postPoke({
          channelId: newChannelId,
          targetUserId: targetHousework?.userId!,
          reactDate: targetHousework?.startDate!,
        });
        toast({ title: `${targetHousework?.assignee}님을 찔렀어요` });
      }
    }
  };

  const handleEdit = (houseworkId: number) => {
    const targetHousework = houseworks?.find(housework => housework.houseworkId === houseworkId);
    if (targetHousework?.status === HOUSEWORK_STATUS.COMPLETE) {
      toast({ title: '완료한 집안일은 수정할 수 없어요' });
    } else {
      navigate(`/add-housework/edit/${channelId}/${houseworkId}/step1`, { state: targetHousework });
    }
  };

  const handleDelete = async (houseworkId: number) => {
    const newChannelId = Number(channelId);
    await deleteHousework({ channelId: newChannelId, houseworkId });
    toast({ title: '집안일이 삭제되었습니다' });
    refetch();
  };

  const filteredHouseworks = houseworks?.filter(
    item => item.assignee === activeTab || activeTab === '전체'
  );

  return (
    <div>
      <HomeHeader />
      <WeeklyDateAndTab
        activeTab={activeTab}
        handleSetActiveTab={setActiveTab}
        chargers={chargers}
      />
      {!filteredHouseworks || filteredHouseworks.length === 0 ? (
        <NoList />
      ) : (
        <HouseworkList
          items={filteredHouseworks}
          handleAction={handleAction}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      )}
      <GroupSelectSheet />
    </div>
  );
};

export default HomePage;
