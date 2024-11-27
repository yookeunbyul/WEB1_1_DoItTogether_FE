interface CompletionDateProps {
  date: string;
  color: string;
}

const CompletionDate: React.FC<CompletionDateProps> = ({ date, color }) => {
  return (
    <div className={`flex items-center gap-2 ${color}`}>
      <i className='h-4 w-4 border border-solid border-black02'></i>
      <p className='text-16'>{date}</p>
    </div>
  );
};

export default CompletionDate;
