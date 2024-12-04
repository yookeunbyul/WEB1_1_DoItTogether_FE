interface CompletionProps {
  count: number;
  icon: React.ReactNode;
}

const Completion: React.FC<CompletionProps> = ({ count, icon }) => {
  return (
    <div className={`flex items-center gap-1 font-label`}>
      {icon}
      <p>{count}</p>
    </div>
  );
};

export default Completion;
