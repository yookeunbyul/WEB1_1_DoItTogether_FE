import Header from '@/components/common/header/Header';
import Line from '@/components/common/line/Line';
import ProfileImg from '@/components/common/profile/ProfileImg';
import AccountInfo from '@/components/my/AccountInfo/AccountInfo';
import ProfileEditBtn from '@/components/my/ProfileEditBtn/ProfileEditBtn';
import SurveyAgainBtn from '@/components/my/SurveyAgainBtn/SurveyAgainBtn';
import { useMy } from '@/hooks/useMy';

const MyPage = () => {
  const { myInfo, isLoading } = useMy();

  if (isLoading) {
    return <></>;
  }

  return (
    <div>
      <Header title='마이페이지' isNeededDoneBtn={false} isNeededSettingBtn={true} />
      <div className='px-5 pb-2 pt-8'>
        <ProfileImg classname='w-20 h-20' imageUrl={myInfo.profileImageUrl} />
      </div>
      <div className='flex justify-between px-5 pb-3 pt-2'>
        <AccountInfo nickname={myInfo.nickName} account={myInfo.email} />
        <ProfileEditBtn nickname={myInfo.nickName} imageUrl={myInfo.profileImageUrl} />
      </div>
      <Line />
      <SurveyAgainBtn />
    </div>
  );
};

export default MyPage;
