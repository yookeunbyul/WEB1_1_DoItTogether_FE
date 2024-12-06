import Header from '@/components/common/header/Header';
import AccountMenuItem from '@/components/my/AccountMenuItem/AccountMenuItem';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const AccountManagePage = () => {
  const navigate = useNavigate();
  const { channelId } = useParams();
  const handleBack = () => {
    navigate(`/main/${channelId}/my-page`);
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    navigate('/');
  };

  const handleLeave = () => {
    console.log('탈퇴');
    navigate(`/my-page/leave/${channelId}`);
  };

  return (
    <div>
      <Header title='계정 관리' isNeededDoneBtn={false} handleBack={handleBack} />
      <AccountMenuItem label='카카오톡' state='연결됨' />
      <AccountMenuItem label='로그아웃' iconType='로그아웃' handleClick={handleLogout} />
      <AccountMenuItem label='탈퇴하기' iconType='탈퇴' handleClick={handleLeave} />
    </div>
  );
};

export default AccountManagePage;
