import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAddHouseWorkStore from '@/store/useAddHouseWorkStore';
import useHomePageStore from '@/store/useHomePageStore';
import { getGroupUser } from '@/services/group/getGroupUser';
import { postHousework } from '@/services/housework/postHousework';
import { putHousework } from '@/services/housework/putHousework';
import { formatDateToISO } from '@/utils/convertDate';
import { convertStartTime } from '@/utils/convertStartTime';
import getWeekText from '@/utils/getWeekText';
import { User } from '@/types/apis/groupApi';

const useHouseworkStepTwo = () => {
  const navigate = useNavigate();
  const { channelId: strChannelId, houseworkId } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { task, category, startDate, startTime, userId, setUserId, reset } = useAddHouseWorkStore();
  const [selectedValue, setSelectedValue] = useState(userId || null);
  const [members, setMembers] = useState<User[]>([]);
  const [isMemberLoading, setIsMemberLoading] = useState(true);
  const { setActiveDate, setActiveWeek, setActiveTab, setWeekText } = useHomePageStore();

  const channelId = Number(strChannelId);

  useEffect(() => {
    const fetchGroupMembers = async () => {
      try {
        const response = await getGroupUser({ channelId });
        setMembers(response.result.userList);
      } catch (error) {
        console.error('멤버 조회 실패:', error);
      } finally {
        setIsMemberLoading(false);
      }
    };

    fetchGroupMembers();
  }, [channelId]);

  const handleBackClick = () => {
    if (houseworkId) navigate(`/add-housework/edit/${channelId}/${houseworkId}/step1`);
    else navigate(`/add-housework/${channelId}/step1`);
  };

  const handleNextClick = async () => {
    setIsLoading(true);

    const formattedDate = formatDateToISO(startDate);
    const newTime = convertStartTime(startTime);

    if (houseworkId) {
      if (userId) {
        await putHousework({
          channelId,
          houseworkId: Number(houseworkId),
          category,
          startDate: formattedDate,
          task,
          startTime: newTime,
          userId,
        });

        setTimeout(() => {
          setActiveDate(formattedDate);
          setActiveWeek(new Date(formattedDate));
          setActiveTab('전체');
          setWeekText(getWeekText(new Date(formattedDate)));
          navigate(`/main/${channelId}`);
          setTimeout(() => {
            reset();
            setIsLoading(false);
          }, 2000);
        }, 2500);
      }
    } else {
      try {
        if (userId) {
          await postHousework({
            channelId,
            category,
            startDate: formattedDate,
            task,
            startTime: newTime,
            userId,
          });

          setTimeout(() => {
            setActiveDate(formattedDate);
            setActiveWeek(new Date(formattedDate));
            setActiveTab('전체');
            setWeekText(getWeekText(new Date(formattedDate)));
            navigate(`/main/${channelId}`);
            setTimeout(() => {
              reset();
              setIsLoading(false);
            }, 2000);
          }, 2500);
        }
      } catch (error) {
        console.error('집안일 추가 실패:', error);
      }
    }
  };

  const handleManagerClick = () => {
    setIsOpen(true);
  };

  const handleDoneClick = () => {
    setIsOpen(false);
    setUserId(selectedValue);
  };

  return {
    isOpen,
    setIsOpen,
    isLoading,
    userId,
    selectedValue,
    setSelectedValue,
    members,
    isMemberLoading,
    task,
    startDate,
    category,
    handleBackClick,
    handleNextClick,
    handleManagerClick,
    handleDoneClick,
  };
};

export default useHouseworkStepTwo;
