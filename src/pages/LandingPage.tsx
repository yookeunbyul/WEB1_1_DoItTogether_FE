import Button from '@/components/common/button/Button/Button';

const LandingPage = () => {
  const handleLoginButton = () => {
    console.log('kakao login API call!');
  };

  return (
    <div className='mx-auto flex h-screen flex-col gap-10 px-5 text-center'>
      <section aria-label='서비스 설명' className='mt-20'>
        {/* TODO 이미지로 변경될 예정 */}
        <div className='text-14'>함께라서 더 즐거운 집안일</div>
      </section>
      <section aria-label='서비스 이름'>
        {/* TODO 이미지로 변경될 예정 */}
        <div className='text-24 font-bold'>두잇투게더</div>
      </section>
      <section aria-label='서비스 로고' className='flex flex-1 items-center justify-center'>
        {/* TODO 로고 이미지로 변경될 예정 */}
        <div>서비스 로고 이미지</div>
      </section>
      <section aria-label='카카오 로그인 버튼' className='mb-20'>
        <Button
          label='카카오로 3초만에 시작하기'
          variant='full'
          size='medium'
          handleClick={handleLoginButton}
        />
      </section>
    </div>
  );
};

export default LandingPage;
