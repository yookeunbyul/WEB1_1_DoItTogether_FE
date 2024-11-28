import Button from '@/components/common/button/Button/Button';

const SurveyAgainBtn = () => {
  const handleClick = () => {
    //survey로 이동
  };
  return (
    <div className='px-5'>
      <Button
        variant='full'
        handleClick={handleClick}
        size='large'
        className={'h-28 justify-between px-4'}
        label={
          <>
            <div>내 청소 성향 다시 분석하기</div>
            <div>이미지</div>
          </>
        }
      />
    </div>
  );
};

export default SurveyAgainBtn;
