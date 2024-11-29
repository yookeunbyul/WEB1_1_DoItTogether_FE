import Button from '@/components/common/button/Button/Button';
import InputWithLabel from '@/components/common/input/InputWithLabel';
import ProfileImg from '@/components/common/profile/ProfileImg';
import TitleCenter from '@/components/common/title/TitleCenter';
import RegisterNotice from '@/components/register/RegisterNotice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const handleSubmitButton = () => {
    navigate('/survey-intro');
  };
  return (
    <div className='flex h-screen w-full flex-col items-center justify-between px-5 pt-10'>
      <div className='flex w-full flex-col items-center justify-between gap-4'>
        <TitleCenter title={`사용하실 닉네임과\n프로필을 설정해주세요`} />
        <ProfileImg />
        <div className='flex w-full flex-1 flex-col gap-4'>
          <InputWithLabel
            label='이름'
            value={name}
            handleChange={setName}
            placeholder='이름을 입력해주세요'
            disabled={false}
          />
          <RegisterNotice />
        </div>
      </div>
      <div className='sticky bottom-6 w-full'>
        <Button label='확인' variant='full' size='large' handleClick={handleSubmitButton} />
      </div>
    </div>
  );
};

export default RegisterPage;
