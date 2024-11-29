import { cn } from '@/lib/utils';

interface ProfileImgProps {
  classname?: string;
  imageUrl?: string;
}

const ProfileImg: React.FC<ProfileImgProps> = ({ classname, imageUrl = '' }) => {
  // TODO 컴포넌트 역할 분리 (상태, 함수)

  return (
    <div className={cn(`relative aspect-square h-36 w-36 overflow-hidden`, classname)}>
      <div className='flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-gray03'>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt='프로필 사진'
            className='h-full w-full rounded-full object-cover'
          />
        ) : (
          // TODO 기본 이미지 경로 설정
          <img
            src='https://i.pinimg.com/736x/86/cb/91/86cb91e2f7256659440afda10016689d.jpg'
            alt='기본 사진'
            className='h-full w-full object-cover'
          />
        )}
      </div>
    </div>
  );
};

export default ProfileImg;
