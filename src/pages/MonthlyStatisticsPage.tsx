import CompletionDate from '@/components/statistics/monthly/Completion/Completion';
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

  return (
    <div className='flex flex-col gap-4'>
      <MonthlyGrass completionData={monthlyGrassData.dates} onMonthChange={handleMonthChange} />
      <p className='text-gray1 font-label flex items-center gap-3'>
        이번달에는
        <p className='flex items-center gap-3'>
          <span className='text-main flex items-center'>
            <CompletionDate
              count={monthlyGrassData.monthlyStats[currentMonth]?.completionRate}
              color='text-main'
            />
            %
          </span>
          <span className='text-main flex items-center'>
            <CompletionDate
              count={monthlyGrassData.monthlyStats[currentMonth]?.completedDays}
              color='text-main'
            />
            개의
          </span>
        </p>
        작업을 완료했어요!
      </p>
      <div className='flex gap-3 py-2'>
        <MonthlyGoodBad type='칭찬' name={monthlyGoodBad.good.member} />
        <MonthlyGoodBad type='찌르기' name={monthlyGoodBad.bad.member} />
      </div>
    </div>
  );
};

export default MonthlyStatisticsPage;
