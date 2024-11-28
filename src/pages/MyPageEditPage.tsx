import Header from '@/components/common/header/Header';
import InputWithLabel from '@/components/common/input/InputWithLabel';
import ProfileImg from '@/components/common/profile/ProfileImg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MyPageEditPage = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState<string>(''); // 수정
  const handleBack = () => {
    navigate('/main/my-page');
  };
  return (
    <>
      <Header title='프로필 편집' isNeededDoneBtn={false} handleBack={handleBack} />
      <div className='mt-10 flex flex-col gap-14 px-5'>
        <div className='m-auto'>
          <ProfileImg />
        </div>
        <InputWithLabel label='이름' value={username} disabled={false} />
      </div>
    </>
  );
};

export default MyPageEditPage;
