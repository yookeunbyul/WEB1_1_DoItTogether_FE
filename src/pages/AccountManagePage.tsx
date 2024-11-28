import Header from '@/components/common/header/Header';
import AccountMenuItem from '@/components/my/AccountMenuItem/AccountMenuItem';
import { useNavigate } from 'react-router-dom';

const AccountManagePage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/main/my-page');
  };

  const handleLogout = () => {
    console.log('로그아웃');
  };

  const handleLeave = () => {
    console.log('탈퇴');
  };

  return (
    <div>
      <Header
        title='계정 관리'
        isNeededBackBtn={true}
        isNeededDoneBtn={false}
        handleBack={handleBack}
      />
      <AccountMenuItem label='카카오톡' state='연결됨' />
      <AccountMenuItem label='로그아웃' iconType='로그아웃' handleClick={handleLogout} />
      <AccountMenuItem label='탈퇴하기' iconType='탈퇴' handleClick={handleLeave} />
    </div>
  );
};

export default AccountManagePage;
