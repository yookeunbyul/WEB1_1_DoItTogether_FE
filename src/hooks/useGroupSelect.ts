import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useHomePageStore from '@/store/useHomePageStore';
import { getMyGroup } from '@/services/group/getMyGroup';
import { Group } from '@/types/apis/groupApi';

export const useGroupSelect = () => {
  const navigate = useNavigate();
  const { setCurrentGroup, groups, setGroups, setActiveTab } = useHomePageStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMyGroup = async () => {
      try {
        const groups = await getMyGroup();
        setGroups(groups.result.channelList);
      } catch (error) {
        console.error('그룹 목록 조회 실패:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMyGroup();
  }, [setGroups]);

  const handleMakeGroupBtnClick = () => {
    navigate('/group/create');
  };

  const handleInvitedBtnClick = () => {
    navigate('/group/invite-receive');
  };

  const handleClick = (group: Group) => {
    setCurrentGroup(group);
    setActiveTab('전체');
    navigate(`/main/${group.channelId}`);
  };

  return {
    isLoading,
    groups,
    handleMakeGroupBtnClick,
    handleInvitedBtnClick,
    handleClick,
  };
};
