import React, { useEffect, useState } from 'react';
import HomeHeader from '@/components/home/HomeHeader/HomeHeader';
import WeeklyDateAndTab from '@/components/home/WeeklyDateAndTab';
import HouseworkList from '@/components/home/HouseworkList/HouseworkList';
import GroupSelectSheet from '@/components/home/GroupSelectSheet/GroupSelectSheet';
import useHomePageStore from '@/store/useHomePageStore';
import getWeekText from '@/utils/getWeekText';
import { useParams } from 'react-router-dom';
import { getMyGroup } from '@/services/group/getMyGroup';
import { getGroupUser } from '@/services/group/getGroupUser';
import { PAGE_SIZE } from '@/constants/common';
import { getHouseworks } from '@/services/housework/getHouseworks';
import { deleteHousework } from '@/services/housework/deleteHouswork';
import { useQuery } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { changeHouseworkStatus } from '@/services/housework/changeHouseworkStatus';
import { getMyInfo } from '@/services/user/getMyInfo';
import { HOUSEWORK_STATUS } from '@/constants/homePage';
import NoListIcon from '@/components/common/icon/NoListIcon';
import { postCompliment } from '@/services/noticeManage/postCompliment';
import { postPoke } from '@/services/noticeManage/postPoke';

const HomePage: React.FC = () => {
  const {
    setWeekText,
    setCurrentGroup,
    setGroups,
    activeDate,
    homePageNumber,
    activeTab,
    setActiveTab,
    myInfo,
    setMyInfo,
  } = useHomePageStore();
  const { channelId } = useParams();
  const [chargers, setChargers] = useState<{ name: string }[]>([{ name: '전체' }]);
  const { data: houseworks, refetch } = useQuery({
    queryKey: ['houseworks', channelId, activeDate],
    queryFn: async () => await fetchHouseworks(activeDate),
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

    setWeekText(getWeekText(new Date()));
    fetchMyGroups();
    fetchMyInfo();
  }, []);

  useEffect(() => {
    const fetchGroupUsers = async () => {
      if (!channelId) return;
      const newChannelId = Number(channelId);
      const getGroupUsersResult = await getGroupUser({ channelId: newChannelId });
      console.log(getGroupUsersResult);
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
    /**
     * 처리 경우의 수
     * 1. 자신의 집안일이라면 완료/미완료
     * 2. 자신의 집안일이 아닌경우
     * 2.1 완료된 상태인 경우 => 칭찬
     * 2.2 미완료된 상태인 경우 => 찌르기
     */
    // 해당 id에 해당하는 집안일 완료 처리

    const targetHousework = houseworks?.find(housework => housework.houseworkId === houseworkId);
    const newChannelId = Number(channelId);

    if (targetHousework?.userId === myInfo?.userId) {
      await changeHouseworkStatus({
        channelId: newChannelId,
        houseworkId,
      });
      refetch();
    } else {
      if (targetHousework?.status === HOUSEWORK_STATUS.COMPLETE) {
        await postCompliment({ channelId: newChannelId, targetUserId: targetHousework.userId });
        toast({ title: `${targetHousework.assignee}님을 칭찬했어요` });
      } else {
        await postPoke({ channelId: newChannelId, targetUserId: targetHousework?.userId! });
        toast({ title: `${targetHousework?.assignee}님을 찔렀어요` });
      }
    }
  };

  const handleEdit = (houseworkId: number) => {
    navigate(`/add-housework/edit/${channelId}/${houseworkId}/step1`);
  };

  const handleDelete = async (houseworkId: number) => {
    const newChannelId = Number(channelId);
    await deleteHousework({ channelId: newChannelId, houseworkId });
    toast({ title: '집안일이 삭제되었습니다' });
    refetch();
  };

  console.log(houseworks);

  return (
    <div>
      <HomeHeader />
      <WeeklyDateAndTab
        activeTab={activeTab}
        handleSetActiveTab={setActiveTab}
        chargers={chargers}
      />
      {!houseworks ||
      houseworks.filter(item => item.assignee === activeTab || activeTab === '전체').length ===
        0 ? (
        <div className='flex h-[calc(100vh-280px)] flex-1 flex-col items-center justify-center gap-4 whitespace-pre-line text-center text-gray3'>
          <NoListIcon />
          <p className='text-gray2 font-subhead'>
            {'현재 집안일 목록이 없어요\n새로운 목록을 만들어보세요'}
          </p>
        </div>
      ) : (
        <HouseworkList
          items={houseworks.filter(item => item.assignee === activeTab || activeTab === '전체')}
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
