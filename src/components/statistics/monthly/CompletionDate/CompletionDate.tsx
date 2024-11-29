interface CompletionDateProps {
  days: number;
  color?: string;
}

const CompletionDate: React.FC<CompletionDateProps> = ({ days, color = 'text-[#989393]' }) => {
  return (
    <div className={`flex items-center gap-2 ${color}`}>
      <i className='h-4 w-4 border border-solid border-black02'></i>
      <p className='text-16'>{days}</p>
    </div>
  );
};

export default CompletionDate;
