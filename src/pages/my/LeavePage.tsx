import Button from '@/components/common/button/Button/Button';
import Header from '@/components/common/header/Header';
import LeaveGuide from '@/components/my/LeaveGuide/LeaveGuide';
import { useLeave } from '@/hooks/useLeave';

const LeavePage = () => {
  const { isChecked, handleBack, handleCheckboxChange, handleDone } = useLeave();

  return (
    <div className={`flex h-screen flex-col gap-6`}>
      <Header title='탈퇴하기' handleBack={handleBack} isNeededDoneBtn={false} />
      <LeaveGuide handleCheckboxChange={handleCheckboxChange} />
      <div className='px-5 pb-5'>
        <Button
          label='확인'
          variant='full'
          size='large'
          handleClick={handleDone}
          disabled={!isChecked}
        />
      </div>
    </div>
  );
};

export default LeavePage;
