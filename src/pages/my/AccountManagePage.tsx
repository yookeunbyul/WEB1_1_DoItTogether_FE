import AlertDialogProps from '@/components/common/alert/AlertDialogProps';
import Header from '@/components/common/header/Header';
import AccountMenuItem from '@/components/my/AccountMenuItem/AccountMenuItem';
import { useAccountManage } from '@/hooks/useAccountManage';

const AccountManagePage = () => {
  const { showAlert, setShowAlert, handleBack, handleLogout, handleLeave, onConfirm } =
    useAccountManage();

  return (
    <div>
      <Header title='계정 관리' isNeededDoneBtn={false} handleBack={handleBack} />
      <AccountMenuItem label='카카오톡' state='연결됨' />
      <AlertDialogProps
        title='로그아웃 하시겠습니까?'
        trigger={<AccountMenuItem label='로그아웃' iconType='로그아웃' handleClick={onConfirm} />}
        onConfirm={handleLogout}
        open={showAlert}
        onOpenChange={setShowAlert}
      />
      <AccountMenuItem label='탈퇴하기' iconType='탈퇴' handleClick={handleLeave} />
    </div>
  );
};

export default AccountManagePage;
