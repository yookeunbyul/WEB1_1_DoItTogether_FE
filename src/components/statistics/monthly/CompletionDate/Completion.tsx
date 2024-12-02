interface CompletionDateProps {
  count: number;
  color?: string;
}

const CompletionDate: React.FC<CompletionDateProps> = ({ count, color = 'text-[#989393]' }) => {
  return (
    <div className={`font-label flex items-center gap-2 ${color}`}>
      <i className='h-4 w-4 border border-solid border-black02'></i>
      <p className='text-16'>{count}</p>
    </div>
  );
};

export default CompletionDate;
