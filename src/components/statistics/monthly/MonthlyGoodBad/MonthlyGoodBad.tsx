import { MonthFingerIcon, MonthlyHeartIcon } from '@/components/common/icon';

interface MonthlyGoodBadProps {
  type: 'good' | 'bad';
  name: string | null;
}

const MonthlyGoodBad: React.FC<MonthlyGoodBadProps> = ({ type, name }) => {
  return (
    <div
      className={`relative aspect-square w-full overflow-hidden rounded-2xl p-6 ${
        type === 'good' ? 'bg-pink1' : 'bg-blue1'
      }`}
    >
      <div className='relative z-10 text-white'>
        <h2 className='font-body'>{type === 'good' ? '칭찬 MVP' : '찌르기 MVP'}</h2>
        <p className='mt-2 font-head'>{name || '아직 없어요'}</p>
      </div>

      <div className='absolute inset-0 flex items-center justify-center'>
        {type === 'good' ? (
          <div className='relative h-full w-full'>
            <MonthlyHeartIcon className='text-pink2 absolute -bottom-[20%] right-[30%] h-auto w-[95%] opacity-100' />
            <MonthlyHeartIcon className='text-pink2 absolute bottom-[10%] right-[10%] h-auto w-[15%] opacity-100' />
            <MonthlyHeartIcon className='text-pink2 absolute bottom-[30%] right-[5%] h-auto w-[30%] -rotate-[60deg] opacity-100' />
          </div>
        ) : (
          <div className='relative h-full w-full'>
            <MonthFingerIcon className='text-blue2 absolute -bottom-[20%] -right-[24%] h-auto w-[100%] rotate-[60deg] opacity-100' />
            <MonthFingerIcon className='text-blue2 absolute -right-[5%] bottom-[55%] h-auto w-[35%] opacity-100' />
          </div>
        )}
      </div>
    </div>
  );
};

export default MonthlyGoodBad;
