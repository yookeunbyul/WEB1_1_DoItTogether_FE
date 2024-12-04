import Button from '@/components/common/button/Button/Button';
import InputWithLabel from '@/components/common/input/InputWithLabel';
import ProfileImg from '@/components/common/profile/ProfileImg';
import TitleCenter from '@/components/common/title/TitleCenter';
import RegisterNotice from '@/components/register/RegisterNotice';
import { getMyInfo } from '@/services/user/getMyInfo';
import { getMyInitState } from '@/services/user/getMyInitState';
import { patchMyInfo } from '@/services/user/patchMyInfo';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [profileUrl, setProfileUrl] = useState('');

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await getMyInfo();
        setName(response.result.nickName);
        setProfileUrl(response.result.profileImageUrl);
      } catch (error) {
        console.error('사용자 정보 조회 실패:', error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleSubmitButton = async () => {
    try {
      await patchMyInfo({ nickName: name });
      const initState = await getMyInitState();
      initState.result ? navigate('/group-select') : navigate('/survey-intro');
    } catch (error) {
      console.error('프로필 수정 및 초기 정보 받기 실패:', error);
    }
  };

  return (
    <div className='flex h-screen w-full flex-col items-center justify-between px-5 pt-10'>
      <div className='flex w-full flex-col items-center justify-between gap-4'>
        <TitleCenter title={`사용하실 닉네임과\n프로필을 설정해주세요`} />
        <ProfileImg imageUrl={profileUrl} />
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
