import AlertDialogProps from '@/components/common/alert/AlertDialogProps';
import Header from '@/components/common/header/Header';
import AccountMenuItem from '@/components/my/AccountMenuItem/AccountMenuItem';
import { useAccountManage } from '@/hooks/useAccountManage';
import MetaTags from '@/components/common/metaTags/MetaTags';
import { useParams } from 'react-router-dom';

const AccountManagePage = () => {
  const { showAlert, setShowAlert, handleBack, handleLogout, handleLeave, onConfirm } =
    useAccountManage();
  const { channelId } = useParams();

  return (
    <div>
      <MetaTags
        title={'두잇투게더 - 계정 관리'}
        description={'로그아웃을 하거나 탈퇴할 수 있는 페이지로 이동할 수 있습니다.'}
        url={`https://doit-together.vercel.app/my-page/account-manage/${channelId}/`}
      />
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