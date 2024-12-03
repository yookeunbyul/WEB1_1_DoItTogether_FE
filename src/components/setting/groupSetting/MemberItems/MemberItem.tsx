import { OutIcon } from '@/components/common/icon';

interface MemberItemProps {
  leader: boolean;
  nickName: string;
  isCurrentUser: boolean;
  handleClick: () => void;
}

const MemberItem: React.FC<MemberItemProps> = ({
  leader,
  nickName,
  handleClick,
  isCurrentUser,
}) => {
  const showButton = leader || isCurrentUser;

  return (
    <div
      className={`flex h-12 items-center justify-between rounded-full border border-solid border-white01 px-2 py-1 text-16 shadow-sm ${!showButton ? 'bg-white02' : ''}`}
    >
      {nickName}
      {showButton && (
        <div onClick={handleClick} className='cursor-pointer'>
          <OutIcon />
        </div>
      )}
    </div>
  );
};

export default MemberItem;
