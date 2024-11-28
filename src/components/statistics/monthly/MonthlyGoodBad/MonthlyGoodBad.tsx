interface MonthlyGoodBadProps {
  type: '칭찬' | '찌르기';
  name: string;
}

const MonthlyGoodBad: React.FC<MonthlyGoodBadProps> = ({ type, name }) => {
  const cardStyle = {
    칭찬: {
      container: 'bg-[#484D54]',
    },
    찌르기: {
      container: 'bg-[#989393]',
    },
  } as const;

  return (
    <div
      className={`flex aspect-square w-full flex-col rounded-xl p-4 text-white02 ${cardStyle[type].container}`}
    >
      <p className='text-16'>{type} MVP</p>
      <p className='text-20'>{name}</p>
    </div>
  );
};

export default MonthlyGoodBad;
