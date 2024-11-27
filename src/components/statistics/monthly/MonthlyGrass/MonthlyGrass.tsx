import Calendar from 'react-calendar';

enum CompletionStatus {
  DONE = 'done',
  SOSO = 'soso',
  NO = 'no',
}

interface CompletionData {
  date: string;
  status: CompletionStatus;
}

interface MonthlyGrassProps {
  completionData: CompletionData[];
}

const MonthlyGrass: React.FC<MonthlyGrassProps> = ({ completionData }) => {
  const getStatus = (date: Date): CompletionStatus => {
    const dateString = date.toLocaleDateString('en-CA');
    const dayData = completionData.find(data => data.date === dateString);
    return dayData?.status || CompletionStatus.NO;
  };

  const getTileClassName = ({ date }: { date: Date }): string => {
    const status = getStatus(date);
    switch (status) {
      case CompletionStatus.DONE:
        return 'bg-[#989393] text-[#D9D9D9] rounded-full';
      case CompletionStatus.SOSO:
        return 'bg-[#D8D8D8] text-[#ACACAC] rounded-full';
      default:
        return 'bg-white03 text-[#ACACAC] rounded-full';
    }
  };

  return (
    <Calendar
      tileClassName={getTileClassName}
      view='month'
      locale='ko'
      minDetail='month'
      maxDetail='month'
      navigationLabel={({ date }) => `${date.getFullYear()}년 ${date.getMonth() + 1}월`}
      formatDay={(locale, date) => date.getDate().toString()}
    />
  );
};
export default MonthlyGrass;
