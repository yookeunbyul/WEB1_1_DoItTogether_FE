import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const useAccountManage = () => {
  const navigate = useNavigate();
  const { channelId } = useParams();
  const [showAlert, setShowAlert] = useState(false);

  const handleBack = () => {
    navigate(`/main/${channelId}/my-page`);
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    navigate('/');
  };

  const handleLeave = () => {
    navigate(`/my-page/leave/${channelId}`);
  };

  const onConfirm = () => {
    setShowAlert(true);
  };

  return {
    showAlert,
    setShowAlert,
    handleBack,
    handleLogout,
    handleLeave,
    onConfirm,
  };
};
