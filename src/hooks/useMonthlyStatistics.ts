import { getMonthlyMVP } from '@/services/statistics/getMonthlyMVP';
import { MonthlyDateScore } from '@/types/apis/statisticsApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const useMonthlyStatistics = () => {
  const getPreviousMonth = () => {
    const today = new Date();
    const firstDayCurrentMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDayPreviousMonth = new Date(firstDayCurrentMonth.getTime() - 1);
    return `${lastDayPreviousMonth.getFullYear()}-${String(lastDayPreviousMonth.getMonth() + 1).padStart(2, '0')}`;
  };

  const [currentMonth, setCurrentMonth] = useState<string>(getPreviousMonth());
  const [monthlyData, setMonthlyData] = useState<MonthlyDateScore[]>([]);
  const [mvpData, setMvpData] = useState<any>(null);
  const { channelId } = useParams();

  useEffect(() => {
    fetchMonthlyMVP();
  }, [currentMonth, channelId]);

  const fetchMonthlyMVP = async () => {
    try {
      const response = await getMonthlyMVP({
        channelId: Number(channelId),
        targetMonth: currentMonth,
      });
      setMvpData(response.result);
    } catch (error) {
      console.error('MVP 데이터 조회 실패:', error);
    }
  };

  const handleMonthChange = async (monthKey: string) => {
    setCurrentMonth(monthKey);
    try {
      const response = await getMonthlyMVP({
        channelId: Number(channelId),
        targetMonth: monthKey,
      });
      setMvpData(response.result);
    } catch (error) {
      console.error('MVP 데이터 조회 실패:', error);
    }
  };

  const handleDataChange = (data: MonthlyDateScore[]) => {
    setMonthlyData(data);
  };

  return {
    currentMonth,
    monthlyData,
    mvpData,
    handleMonthChange,
    handleDataChange,
  };
};

export default useMonthlyStatistics;
