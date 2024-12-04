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
      className={`flex h-14 items-center justify-between border-b-[1px] border-solid border-gray4 border-opacity-30 bg-white px-2 text-gray1 font-body ${!showButton ? 'text-gray3' : ''}`}
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
