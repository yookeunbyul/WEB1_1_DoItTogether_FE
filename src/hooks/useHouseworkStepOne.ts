import { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useAddHouseWorkStore from '@/store/useAddHouseWorkStore';
import convertTimeToObject from '@/utils/convertTimeToObject';

export interface SelectedTime {
  hour: string;
  minute: string;
  ampm: 'AM' | 'PM';
}

export const useHouseWorkStepOne = () => {
  const navigate = useNavigate();
  const {
    task,
    setCategory,
    startDate,
    startTime,
    setStartTime,
    reset,
    setTask,
    setStartDate,
    setIsAllday,
    setUserId,
  } = useAddHouseWorkStore();

  const [isHouseWorkSheetOpen, setHouseWorkSheetOpen] = useState(false);
  const [isDueDateSheetOpen, setDueDateSheetOpen] = useState(false);
  const [time, setTime] = useState<SelectedTime | null>(startTime);

  const { channelId: strChannelId, houseworkId: strHouseworkId } = useParams();
  const channelId = Number(strChannelId);
  const houseworkId = Number(strHouseworkId);

  const location = useLocation();
  const targetHousework = location.state;

  useEffect(() => {
    if (targetHousework) {
      setTask(targetHousework.task);

      const date = new Date(targetHousework.startDate);
      const formattedDate = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;

      setStartDate(formattedDate);
      setCategory(targetHousework.category);
      setUserId(targetHousework.userId);
      setIsAllday(targetHousework.isAllDay);
      if (!targetHousework.isAllDay && targetHousework.startTime) {
        const result = convertTimeToObject(targetHousework.startTime);
        setStartTime(result);
      }
    }
  }, []);

  const handleBackClick = () => {
    navigate(`/main/${channelId}`);
    reset();
  };

  const handleHouseWorkClick = () => {
    setHouseWorkSheetOpen(true);
  };

  const handleDueDateClick = () => {
    setDueDateSheetOpen(true);
  };

  const handleNextClick = () => {
    setStartTime(time);

    if (houseworkId) navigate(`/add-housework/edit/${channelId}/${houseworkId}/step2`);
    else navigate(`/add-housework/${channelId}/step2`);
  };

  const handleTimeChange = (newTime: SelectedTime | null) => {
    setTime(newTime);
  };

  return {
    task,
    startDate,
    time,
    isHouseWorkSheetOpen,
    isDueDateSheetOpen,
    handleBackClick,
    handleHouseWorkClick,
    handleDueDateClick,
    handleNextClick,
    handleTimeChange,
    setHouseWorkSheetOpen,
    setDueDateSheetOpen,
  };
};
