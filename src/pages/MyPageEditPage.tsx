import Header from '@/components/common/header/Header';
import InputWithLabel from '@/components/common/input/InputWithLabel';
import ProfileImg from '@/components/common/profile/ProfileImg';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const MyPageEditPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const imageUrl = location.state?.imageUrl;
  const nickName = location.state?.nickname;

  const [username, setUserName] = useState<string>(nickName); // 수정
  const { channelId } = useParams();
  const handleBack = () => {
    navigate(`/main/${channelId}/my-page`);
  };
  return (
    <>
      <Header title='프로필 편집' isNeededDoneBtn={false} handleBack={handleBack} />
      <div className='mt-10 flex flex-col gap-12 px-5'>
        <div className='m-auto'>
          <ProfileImg imageUrl={imageUrl} />
        </div>
        <InputWithLabel label='이름' value={username} disabled={false} handleChange={setUserName} />
      </div>
    </>
  );
};

export default MyPageEditPage;
