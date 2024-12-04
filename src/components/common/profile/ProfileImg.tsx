import { ProfileIcon } from '@/components/common/icon';
import { cn } from '@/lib/utils';

interface ProfileImgProps {
  classname?: string;
  imageUrl?: string;
}

const ProfileImg: React.FC<ProfileImgProps> = ({ classname, imageUrl = '' }) => {
  // TODO 컴포넌트 역할 분리 (상태, 함수)

  return (
    <div className={cn(`relative aspect-square h-36 w-36 overflow-hidden`, classname)}>
      <div className='flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-gray4'>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt='프로필 사진'
            className='h-full w-full rounded-full object-cover'
          />
        ) : (
          // TODO 기본 이미지 경로 설정
          <div className='flex h-20 w-20 items-center justify-center rounded-full bg-sub'>
            <ProfileIcon className='text-sub2' width={40} height={40} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileImg;
