import { useNavigate, useParams } from 'react-router-dom';

const ProfileEditBtn = () => {
  const navigate = useNavigate();
  const { channelId } = useParams();

  const handleClick = () => {
    navigate(`/main/${channelId}/my-page/edit`);
  };
  return (
    <button
      className='border-gray7 text-gray7 rounded-full border-[1px] border-solid px-5 py-2 font-caption'
      onClick={handleClick}
    >
      프로필 편집
    </button>
  );
};

export default ProfileEditBtn;
