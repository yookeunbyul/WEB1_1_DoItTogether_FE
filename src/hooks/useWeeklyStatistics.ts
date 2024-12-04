import { getWeeklyScore } from '@/services/statistics/GetWeeklyScore';
import { getWeeklyTotalCount } from '@/services/statistics/GetWeeklyTotalCount';
import useWeeklyStateStore from '@/store/useWeeklyStatisticsStore';
import getFormattedDate from '@/utils/getFormattedDate';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const useWeeklyStatistics = () => {
  const { channelId: strChannelId } = useParams();
  const channelId = Number(strChannelId);
  const { currentDate, setCurrentDate, setTotalCountData, setScoreCountData } =
    useWeeklyStateStore();

  useEffect(() => {
    // TODO API 개발 후, 주석풀고 임시값 제거
    // getTotalCountData();
    // getScoreCountData();
    setTotalCountData({
      completeCount: 10,
      notCompleteCount: 3,
      complimentCount: 10,
      pokeCount: 3,
    });
    setScoreCountData([
      {
        nickname: '엄마',
        completeCount: 8,
      },
      {
        nickname: '아빠',
        completeCount: 6,
      },
      {
        nickname: '첫째',
        completeCount: 4,
      },
      {
        nickname: '둘째',
        completeCount: 2,
      },
    ]);
  }, []);

  const getTotalCountData = async () => {
    try {
      const targetDate = getFormattedDate(currentDate);
      const response = await getWeeklyTotalCount({ channelId, targetDate });
      setTotalCountData(response.result);
    } catch (error) {
      console.error('주간 통계 데이터 조회 실패: ', error);
    }
  };

  const getScoreCountData = async () => {
    try {
      const targetDate = getFormattedDate(currentDate);
      const response = await getWeeklyScore({ channelId, targetDate });
      setScoreCountData(response.result.completeScoreSortedResponse);
    } catch (error) {
      console.error('주간 통계 랭킹 데이터 조회 실패', error);
    }
  };

  console.log(getTotalCountData, getScoreCountData);

  const handlePrevWeek = () => {
    setCurrentDate((prevDate: Date) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() - 7);
      return newDate;
    });
  };

  const handleNextWeek = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + 7);
      return newDate;
    });
  };

  return {
    handlePrevWeek,
    handleNextWeek,
  };
};

export default useWeeklyStatistics;