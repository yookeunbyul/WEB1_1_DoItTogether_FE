import { ChartIcon, CheckFillIcon } from '@/components/common/icon';
import Completion from '@/components/statistics/monthly/Completion/Completion';
import MonthlyGoodBad from '@/components/statistics/monthly/MonthlyGoodBad/MonthlyGoodBad';
import MonthlyGrass from '@/components/statistics/monthly/MonthlyGrass/MonthlyGrass';
import { monthlyGoodBad } from '@/mock/monthlyGoodBad';
import { CompletionStatus, MonthlyDateScore } from '@/types/apis/statisticsApi';
import { useState } from 'react';

const MonthlyStatisticsPage = () => {
  const [currentMonth, setCurrentMonth] = useState<string>('2024-10');
  const [monthlyData, setMonthlyData] = useState<MonthlyDateScore[]>([]);

  const handleMonthChange = (monthKey: string) => {
    setCurrentMonth(monthKey);
  };

  const handleDataChange = (data: MonthlyDateScore[]) => {
    setMonthlyData(data);
  };

  // 통계 완료율, 완료일 계산
  const calculateMonthStats = () => {
    if (!monthlyData.length) return { completionRate: 0, completedDays: 0 };

    const [year, monthStr] = currentMonth.split('-');
    const totalDaysInMonth = new Date(parseInt(year), parseInt(monthStr), 0).getDate();
    const completedDays = monthlyData.filter(
      task => task.status === CompletionStatus.ALL_DONE
    ).length;
    const completionRate = Math.round((completedDays / totalDaysInMonth) * 100);

    return { completionRate, completedDays };
  };

  const currentMonthStats = calculateMonthStats();

  return (
    <div className='flex flex-col gap-4'>
      <MonthlyGrass onMonthChange={handleMonthChange} onDataChange={handleDataChange} />
      <div className='flex items-center gap-3 text-black font-label'>
        이번달에는
        <div className='flex items-center gap-3'>
          <span className='flex items-center text-main'>
            <Completion count={currentMonthStats.completionRate} icon={<ChartIcon />} />%
          </span>
          <span className='flex items-center text-main'>
            <Completion count={currentMonthStats.completedDays} icon={<CheckFillIcon />} />
            개의
          </span>
        </div>
        작업을 완료했어요!
      </div>
      <div className='flex gap-3 py-2'>
        <MonthlyGoodBad type='good' name={monthlyGoodBad.good.member} />
        <MonthlyGoodBad type='bad' name={monthlyGoodBad.bad.member} />
      </div>
    </div>
  );
};

export default MonthlyStatisticsPage;
