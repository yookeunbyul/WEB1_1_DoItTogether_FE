import TextTag from '@/components/common/tag/TextTag/TextTag';
import { User } from '@/types/apis/groupApi';
import useDeviceHeight from '@/hooks/useDevice';
import LottieIcon from '@/components/common/lottie/LottieIcon';

interface HouseWorkAddLoadingProps {
  date: string;
  housework: string;
  member: number | null;
  members: User[];
  category: string;
}

const HouseWorkAddLoading: React.FC<HouseWorkAddLoadingProps> = ({
  date,
  housework,
  member,
  members,
  category,
}) => {
  const findNameByMember = members.find(mem => mem.userId === member)?.nickName;
  const customHeightClass = useDeviceHeight();
  return (
    <div className={`${customHeightClass} flex w-full max-w flex-col gap-4`}>
      <p className='mt-16 text-main font-title'>{date}에</p>
      <div className='flex flex-wrap items-center gap-2'>
        <TextTag
          type='darkfill'
          label={housework}
          category={category}
          className='flex items-center gap-x-2 font-label'
        />
        <p className='text-main font-head'>를</p>
      </div>
      <div className='flex flex-wrap items-center gap-2'>
        <TextTag
          type='darkfill'
          label={findNameByMember ?? ''}
          findNameByMember={findNameByMember}
          className='flex items-center gap-x-2 font-label'
        />
        <p className='text-main font-head'>님이 담당하도록 추가했어요!</p>
      </div>
      <div className='flex h-40 items-center justify-center'>
        <LottieIcon />
      </div>
    </div>
  );
};

export default HouseWorkAddLoading;
