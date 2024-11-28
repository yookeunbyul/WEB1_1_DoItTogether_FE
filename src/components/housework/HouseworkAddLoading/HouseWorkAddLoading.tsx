import TextTag from '@/components/common/tag/TextTag/TextTag';

interface HouseWorkAddLoadingProps {
  date: string;
  housework: string;
  member: string;
}

const HouseWorkAddLoading: React.FC<HouseWorkAddLoadingProps> = ({ date, housework, member }) => {
  return (
    <div className='flex h-screen w-full max-w flex-col gap-4 px-5'>
      <p className='mt-16 text-24'>{date}에</p>
      <div className='flex flex-wrap items-center gap-2'>
        <TextTag type='darkfill' label={housework} />
        <p className='text-20'>를</p>
      </div>
      <div className='flex flex-wrap items-center gap-2'>
        <TextTag type='darkfill' label={member} />
        <p className='text-20'>님이 담당하도록 추가했어요!</p>
      </div>
      <div className='flex h-40 items-center justify-center'>애니메이션 영역</div>
    </div>
  );
};

export default HouseWorkAddLoading;
