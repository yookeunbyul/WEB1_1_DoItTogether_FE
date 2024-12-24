import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMyInfo } from '@/services/user/getMyInfo';
import { patchMyInfo } from '@/services/user/patchMyInfo';
import { INPUT_VALIDATION } from '@/constants/validation';

export const useRegister = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [profileUrl, setProfileUrl] = useState('');
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await getMyInfo();
        setName(response.result.nickName);
        setProfileUrl(response.result.profileImageUrl);
      } catch (error) {
        console.error('내 정보 조회 실패:', error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleSubmitButton = async () => {
    try {
      await patchMyInfo({ nickName: name });
      navigate('/survey-intro');
    } catch (error) {
      console.error('프로필 수정 및 초기 정보 받기 실패:', error);
    }
  };

  const handleNameChange = (value: string) => {
    setName(value);
    if (
      value.length <= INPUT_VALIDATION.nickname.maxLength &&
      INPUT_VALIDATION.nickname.regexp.test(value)
    ) {
      setError(false);
    } else {
      setError(true);
    }
  };

  return {
    name,
    profileUrl,
    error,
    handleNameChange,
    handleSubmitButton,
  };
};
