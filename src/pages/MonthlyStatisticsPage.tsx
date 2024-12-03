import { ChartIcon, CheckFillIcon } from '@/components/common/icon';
import Completion from '@/components/statistics/monthly/Completion/Completion';
import MonthlyGoodBad from '@/components/statistics/monthly/MonthlyGoodBad/MonthlyGoodBad';
import MonthlyGrass from '@/components/statistics/monthly/MonthlyGrass/MonthlyGrass';
import { monthlyGoodBad } from '@/mock/monthlyGoodBad';
import { monthlyGrassData } from '@/mock/monthlyGrassData';
import { useState } from 'react';

const MonthlyStatisticsPage = () => {
  const [currentMonth, setCurrentMonth] = useState<string>('2024-10');

  const handleMonthChange = (monthKey: string) => {
    setCurrentMonth(monthKey);
  };

  // 통계 완료율, 완료일 계산
  const calculateMonthStats = (month: string) => {
    const [year, monthStr] = month.split('-');
    const totalDaysInMonth = new Date(parseInt(year), parseInt(monthStr), 0).getDate();
    const monthData = monthlyGrassData.dates.filter(task => task.date.startsWith(month));
    const completedDays = monthData.filter(task => task.status === 'ALL_DONE').length;
    const completionRate = Math.round((completedDays / totalDaysInMonth) * 100);

    return { completionRate, completedDays };
  };

  const currentMonthStats = calculateMonthStats(currentMonth);

  return (
    <div className='flex flex-col gap-4'>
      <MonthlyGrass completionData={monthlyGrassData.dates} onMonthChange={handleMonthChange} />
      <p className='flex items-center gap-3 text-gray font-label'>
        이번달에는
        <p className='flex items-center gap-3'>
          <span className='flex items-center text-main'>
            <Completion count={currentMonthStats.completionRate} icon={<ChartIcon />} />%
          </span>
          <span className='flex items-center text-main'>
            <Completion count={currentMonthStats.completedDays} icon={<CheckFillIcon />} />
            개의
          </span>
        </p>
        작업을 완료했어요!
      </p>
      <div className='flex gap-3 py-2'>
        <MonthlyGoodBad type='good' name={monthlyGoodBad.good.member} />
        <MonthlyGoodBad type='bad' name={monthlyGoodBad.bad.member} />
      </div>
    </div>
  );
};

export default MonthlyStatisticsPage;
