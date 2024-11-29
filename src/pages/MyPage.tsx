import ProfileImg from '@/components/common/profile/ProfileImg';
import AccountInfo from '@/components/my/AccountInfo/AccountInfo';
import AccountSetBtn from '@/components/my/AccountSetBtn/AccountSetBtn';
import ProfileEditBtn from '@/components/my/ProfileEditBtn/ProfileEditBtn';
import SurveyAgainBtn from '@/components/my/SurveyAgainBtn/SurveyAgainBtn';

const MyPage = () => {
  return (
    <div>
      <AccountSetBtn />
      <div className='px-5 py-2'>
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
