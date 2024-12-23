import CompletionText from '@/components/statistics/monthly/CompletionText/CompletionText';
import MonthlyGoodBad from '@/components/statistics/monthly/MonthlyGoodBad/MonthlyGoodBad';
import MonthlyGrass from '@/components/statistics/monthly/MonthlyGrass/MonthlyGrass';
import useMonthlyStatistics from '@/hooks/useMonthlyStatistics';

const MonthlyStatisticsPage = () => {
  const { mvpData, handleMonthChange, handleDataChange, monthlyData, currentMonth } =
    useMonthlyStatistics();

  return (
    <div className='flex flex-col gap-4'>
      <MonthlyGrass onMonthChange={handleMonthChange} onDataChange={handleDataChange} />
      <CompletionText monthlyData={monthlyData} currentMonth={currentMonth} />
      <div className='flex gap-3 py-2'>
        <MonthlyGoodBad type='good' name={mvpData?.complimentMVPNickName} />
        <MonthlyGoodBad type='bad' name={mvpData?.pokeMVPNickName} />
      </div>
    </div>
  );
};

export default MonthlyStatisticsPage;
