interface MemberItemProps {
  leader: boolean;
  member: string;
  isCurrentUser: boolean;
  handleClick: () => void;
}

const MemberItem: React.FC<MemberItemProps> = ({ leader, member, handleClick, isCurrentUser }) => {
  const showButton = leader || isCurrentUser;

  return (
    <div
      className={`flex h-12 items-center justify-between rounded-full border border-solid border-white01 px-2 py-1 text-16 shadow-sm ${!showButton ? 'bg-white02' : ''}`}
    >
      {member}
      {showButton && (
        <i className='h-4 w-4 border border-solid border-black02' onClick={handleClick}></i>
      )}
    </div>
  );
};

export default MemberItem;
