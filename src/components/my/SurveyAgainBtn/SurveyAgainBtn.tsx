import Button from '@/components/common/button/Button/Button';
import Broomstick from '@/components/common/icon/Broomstick';

const SurveyAgainBtn = () => {
  const handleClick = () => {
    //survey로 이동
  };
  return (
    <div className='relative overflow-hidden px-5'>
      <Button
        variant='full'
        handleClick={handleClick}
        size='large'
        className={'h-28 justify-between px-4'}
        label={'내 성향 다시 분석하기'}
      />
      <div className='absolute -top-8 right-5'>
        <Broomstick />
      </div>
    </div>
  );
};

export default SurveyAgainBtn;
