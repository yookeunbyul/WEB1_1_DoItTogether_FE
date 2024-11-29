import CompletionDate from '@/components/statistics/monthly/CompletionDate/CompletionDate';
import CompletionRate from '@/components/statistics/monthly/CompletionRate/CompletionRate';
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
    <div className='flex flex-col gap-5'>
      <MonthlyGrass completionData={monthlyGrassData.dates} onMonthChange={handleMonthChange} />
      <div className='flex h-8 justify-between'>
        <CompletionRate rate={monthlyGrassData.monthlyStats[currentMonth]?.completionRate} />
        <CompletionDate days={monthlyGrassData.monthlyStats[currentMonth]?.completedDays} />
      </div>
      <div className='flex gap-3'>
        <MonthlyGoodBad type='칭찬' name={monthlyGoodBad.good.member} />
        <MonthlyGoodBad type='찌르기' name={monthlyGoodBad.bad.member} />
      </div>
    </div>
  );
};

export default MonthlyStatisticsPage;
