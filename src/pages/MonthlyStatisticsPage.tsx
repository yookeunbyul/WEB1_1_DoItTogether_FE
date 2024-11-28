import CompletionDate from '@/components/statistics/monthly/CompletionDate/CompletionDate';
import CompletionRate from '@/components/statistics/monthly/CompletionRate/CompletionRate';
import MonthlyGoodBad from '@/components/statistics/monthly/MonthlyGoodBad/MonthlyGoodBad';
import MonthlyGrass from '@/components/statistics/monthly/MonthlyGrass/MonthlyGrass';

enum CompletionStatus {
  DONE = 'done',
  SOSO = 'soso',
  NO = 'no',
}

const MonthlyStatisticsPage = () => {
  const sampleCompletionData = [
    { date: '2024-11-01', status: CompletionStatus.DONE },
    { date: '2024-11-02', status: CompletionStatus.DONE },
    { date: '2024-11-03', status: CompletionStatus.DONE },
    { date: '2024-11-04', status: CompletionStatus.DONE },
    { date: '2024-11-05', status: CompletionStatus.DONE },
    { date: '2024-11-06', status: CompletionStatus.DONE },
    { date: '2024-11-07', status: CompletionStatus.SOSO },
    { date: '2024-11-07', status: CompletionStatus.NO },
    { date: '2024-11-09', status: CompletionStatus.SOSO },
    { date: '2024-11-10', status: CompletionStatus.SOSO },
    { date: '2024-11-11', status: CompletionStatus.DONE },
    { date: '2024-11-12', status: CompletionStatus.DONE },
    { date: '2024-11-13', status: CompletionStatus.DONE },
    { date: '2024-11-14', status: CompletionStatus.DONE },
    { date: '2024-11-16', status: CompletionStatus.SOSO },
    { date: '2024-11-17', status: CompletionStatus.SOSO },
    { date: '2024-11-18', status: CompletionStatus.DONE },
    { date: '2024-11-19', status: CompletionStatus.SOSO },
    { date: '2024-11-20', status: CompletionStatus.DONE },
    { date: '2024-11-21', status: CompletionStatus.DONE },
    { date: '2024-11-23', status: CompletionStatus.SOSO },
    { date: '2024-11-24', status: CompletionStatus.DONE },
    { date: '2024-11-26', status: CompletionStatus.DONE },
    { date: '2024-11-27', status: CompletionStatus.DONE },
    { date: '2024-11-28', status: CompletionStatus.DONE },
  ];

  return (
    <div className='flex flex-col gap-5'>
      <MonthlyGrass completionData={sampleCompletionData} />
      <div className='flex h-8 justify-between'>
        <CompletionRate rate={80} />
        <CompletionDate date='18' />
      </div>
      <div className='flex gap-3'>
        <MonthlyGoodBad type='칭찬' name='꼼시' />
        <MonthlyGoodBad type='찌르기' name='꼼시' />
      </div>
    </div>
  );
};

export default MonthlyStatisticsPage;
