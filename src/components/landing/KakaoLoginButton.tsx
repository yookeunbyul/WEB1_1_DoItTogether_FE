import { motion } from 'framer-motion';
import Button from '@/components/common/button/Button/Button';

interface KakaoLoginButtonProps {
  handleLoginButton: () => void;
}

const KakaoLoginButton: React.FC<KakaoLoginButtonProps> = ({ handleLoginButton }) => {
  const item = {
    hidden: { opacity: 0, y: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeIn',
      },
    },
  };

  return (
    <motion.section variants={item} aria-label='카카오 로그인 버튼' className='sticky bottom-6'>
      <Button
        label='카카오로 3초만에 시작하기'
        variant='kakao'
        size='large'
        handleClick={handleLoginButton}
      />
    </motion.section>
  );
};

export default KakaoLoginButton;
