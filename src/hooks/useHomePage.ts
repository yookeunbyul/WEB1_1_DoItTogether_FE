import { useState, useEffect, useMemo, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import useHomePageStore from '@/store/useHomePageStore';

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
import useAddHouseWorkStore from '@/store/useAddHouseWorkStore';

export const useHomePage = () => {
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
  } = useHomePageStore();

  const { setTargetHousework } = useAddHouseWorkStore();

  const { channelId: channelIdStr } = useParams();
  const channelId = Number(channelIdStr);
  const [chargers, setChargers] = useState<{ name: string }[]>([{ name: '전체' }]);

  const { toast } = useToast();
  const navigate = useNavigate();

  const { data: houseworks, refetch } = useQuery({
    queryKey: ['houseworks', channelId, activeDate],
    queryFn: () => fetchHouseworks(activeDate),
    refetchOnWindowFocus: true,
  });

  const fetchHouseworks = useCallback(
    async (date: string) => {
      try {
        const getHouseworksResult = await getHouseworks({
          channelId,
          targetDate: date,
          pageNumber: homePageNumber,
          pageSize: PAGE_SIZE,
        });
        return getHouseworksResult.result.responses;
      } catch (error) {
        console.error('집안일 목록 가져오기 실패:', error);
      }
    },
    [channelId, homePageNumber]
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [myGroupResult, myInfoResult] = await Promise.all([getMyGroup(), getMyInfo()]);

        const myGroups = myGroupResult.result.channelList;
        setGroups(myGroups);
        setMyInfo(myInfoResult.result);

        if (channelId) {
          const currentGroup = myGroups.find(group => group.channelId === channelId);
          setCurrentGroup(currentGroup!);
        }
      } catch (error) {
        console.error('그룹 및 내 정보 조회 중 실패:', error);
      }
    };

    fetchData();
  }, [channelId, setGroups, setMyInfo, setCurrentGroup]);

  useEffect(() => {
    const fetchGroupUsers = async () => {
      if (!channelId) return;
      try {
        const getGroupUsersResult = await getGroupUser({ channelId });
        const newChargers = [
          { name: '전체' },
          ...Array.from(
            new Set(getGroupUsersResult.result.userList.map(user => user.nickName))
          ).map(charger => ({ name: charger })),
        ];
        setChargers(newChargers);
      } catch (error) {
        console.error('그룹 사용자 조회 실패:', error);
      }
    };

    fetchGroupUsers();
  }, [channelId]);

  const updateWeeklyIncomplete = useCallback(async () => {
    try {
      const currWeekResult = await getWeeklyIncomplete({
        channelId,
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
    } catch (error) {
      console.error('주간 미완료율 조회 실패:', error);
    }
  }, [channelId, activeDate, setCurrWeek]);

  const handleAction = useCallback(
    async (houseworkId: number) => {
      const targetHousework = houseworks?.find(housework => housework.houseworkId === houseworkId);

      if (!targetHousework) return;

      const isMyHousework = targetHousework.userId === myInfo?.userId;
      const isComplete = targetHousework.status === HOUSEWORK_STATUS.COMPLETE;

      if (isMyHousework) {
        try {
          await changeHouseworkStatus({ channelId, houseworkId });
          refetch();
          await updateWeeklyIncomplete();
        } catch (error) {
          console.error('집안일 상태 변경 실패:', error);
        }
      } else if (isComplete) {
        try {
          await postCompliment({
            channelId,
            targetUserId: targetHousework.userId,
            reactDate: targetHousework.startDate,
          });
          toast({ title: `${targetHousework.assignee}님을 칭찬했어요` });
        } catch (error) {
          console.error('칭찬하기 실패:', error);
        }
      } else {
        try {
          await postPoke({
            channelId,
            targetUserId: targetHousework.userId!,
            reactDate: targetHousework.startDate!,
          });
          toast({ title: `${targetHousework.assignee}님을 찔렀어요` });
        } catch (error) {
          console.error('찌르기 실패:', error);
        }
      }
    },
    [channelId, houseworks, myInfo, refetch, updateWeeklyIncomplete, toast]
  );

  const handleEdit = useCallback(
    (houseworkId: number) => {
      const targetHousework = houseworks?.find(housework => housework.houseworkId === houseworkId);
      if (targetHousework?.status === HOUSEWORK_STATUS.COMPLETE) {
        toast({ title: '완료한 집안일은 수정할 수 없어요' });
      } else {
        setTargetHousework(targetHousework);
        navigate(`/add-housework/edit/${channelId}/${houseworkId}`);
      }
    },
    [houseworks, navigate, channelId, toast]
  );

  const handleDelete = useCallback(
    async (houseworkId: number) => {
      try {
        await deleteHousework({ channelId, houseworkId });
        toast({ title: '집안일이 삭제되었습니다' });
        refetch();
      } catch (error) {
        console.error('집안일 삭제 실패:', error);
      }
    },
    [channelId, refetch, toast]
  );

  const filteredHouseworks = useMemo(
    () => houseworks?.filter(item => item.assignee === activeTab || activeTab === '전체'),
    [houseworks, activeTab]
  );

  return {
    chargers,
    activeTab,
    setActiveTab,
    filteredHouseworks,
    handleAction,
    handleEdit,
    handleDelete,
  };
};