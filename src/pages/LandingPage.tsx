import Button from '@/components/common/button/Button/Button';
import { getMyInitState } from '@/services/user/getMyInitState';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useDeviceHeight from '@/hooks/useDevice';
import LottieIcon from '@/components/common/lottie/LottieIcon';

const LandingPage = () => {
  const navigate = useNavigate();
  const customHeightClass = useDeviceHeight();

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
    <div className={`${customHeightClass} mx-auto flex flex-col gap-10 px-5 text-center`}>
      <div className='flex flex-1 flex-col gap-10'>
        <section aria-label='서비스 설명' className='mt-20'>
          <div className='text-14'>함께라서 더 즐거운 집안일</div>
        </section>
        <section aria-label='서비스 이름'>
          <div className='text-24 font-bold'>두잇투게더</div>
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
