import Button from '@/components/common/button/Button/Button';
import { getMyInitState } from '@/services/user/getMyInitState';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LottieIcon from '@/components/common/lottie/LottieIcon';
import LogoIcon from '@/components/common/icon/LogoIcon';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLoginButton = () => {
    if (localStorage.getItem('access_token')) {
      navigate('/group-select');
      return;
    }
    window.location.href = `${import.meta.env.VITE_SERVER_URL}/oauth2/authorization/kakao`;
  };

  useEffect(() => {
    const checkInitialState = async () => {
      const accessToken = new URLSearchParams(location.search).get('access_token');
      if (accessToken) {
        localStorage.setItem('access_token', accessToken);
        try {
          const initState = await getMyInitState();
          initState.result ? navigate('/group-select') : navigate('/register');
        } catch (error) {
          console.error('초기 상태 확인 실패:', error);
        }
      }
    };

    checkInitialState();
  }, []);

  return (
    <div className={`mx-auto flex h-screen flex-col gap-10 px-5 text-center`}>
      <div className='flex flex-1 flex-col gap-10'>
        <section aria-label='서비스 이름'>
          <div className='flex flex-col items-center justify-center gap-6 pt-20 text-24 font-bold'>
            <p className='flex justify-center text-sub font-label'>함께라서 더 즐거운 집안일</p>
            <LogoIcon />
          </div>
        </section>
        <section aria-label='서비스 로고' className='flex flex-1 items-center justify-center'>
          <LottieIcon />
        </section>
      </div>
      <section aria-label='카카오 로그인 버튼' className='sticky bottom-6'>
        <Button
          label='카카오로 3초만에 시작하기'
          variant='kakao'
          size='large'
          handleClick={handleLoginButton}
        />
      </section>
    </div>
  );
};

export default LandingPage;
