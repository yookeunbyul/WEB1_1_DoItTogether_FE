import Header from '@/components/common/header/Header';
import ProfileImg from '@/components/common/profile/ProfileImg';
import AccountInfo from '@/components/my/AccountInfo/AccountInfo';
import ProfileEditBtn from '@/components/my/ProfileEditBtn/ProfileEditBtn';
import SurveyAgainBtn from '@/components/my/SurveyAgainBtn/SurveyAgainBtn';

const MyPage = () => {
  return (
    <div>
      <Header title='마이페이지' isNeededDoneBtn={false} isNeededSettingBtn={true} />
      <div className='px-5 pb-2 pt-8'>
        <ProfileImg classname='w-20 h-20' />
      </div>
      <div className='flex items-center justify-between px-5 pb-3 pt-2'>
        <AccountInfo nickname='스페이스천사' account='example@example' />
        <ProfileEditBtn />
      </div>
      <div className='mb-6 mt-2 h-[1px] w-full bg-white01 px-5' />
      <SurveyAgainBtn />
    </div>
  );
};

export default MyPage;
