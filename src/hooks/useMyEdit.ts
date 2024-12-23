import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { patchMyInfo } from '@/services/user/patchMyInfo';
import { toast } from '@/hooks/use-toast';
import { INPUT_VALIDATION } from '@/constants/validation';

export const useMyEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { channelId } = useParams();

  const imageUrl = location.state?.imageUrl;
  const nickName = location.state?.nickname;

  const [username, setUserName] = useState<string>(nickName);
  const [isEdited, setIsEdited] = useState(false);
  const [error, setError] = useState<boolean>(false);

  const handleBack = () => {
    navigate(`/main/${channelId}/my-page`);
  };

  const handleChange = (value: string) => {
    setUserName(value);
    setIsEdited(true);
    if (
      value.length <= INPUT_VALIDATION.nickname.maxLength &&
      INPUT_VALIDATION.nickname.regexp.test(value)
    ) {
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleDone = async () => {
    try {
      await patchMyInfo({ nickName: username });
      navigate(`/main/${channelId}/my-page`);
      toast({
        title: '프로필이 변경되었어요',
      });
    } catch (error) {
      console.error('프로필 수정 실패:', error);
    }
  };

  return {
    imageUrl,
    username,
    isEdited,
    error,
    handleBack,
    handleChange,
    handleDone,
  };
};
