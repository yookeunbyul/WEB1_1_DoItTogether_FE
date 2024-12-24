import { motion } from 'framer-motion';
import { ServiceTitle, ServiceLogo, KakaoLoginButton } from '@/components/landing';
import { useLanding } from '@/hooks/useLanding';

const LandingPage = () => {
  const { handleLoginButton } = useLanding();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.7,
      },
    },
  };

  return (
    <motion.div
      className={`mx-auto flex h-screen flex-col gap-10 px-5 text-center`}
      variants={container}
      initial='hidden'
      animate='show'
    >
      <div className='flex flex-1 flex-col'>
        <ServiceTitle />
        <ServiceLogo />
      </div>
      <KakaoLoginButton handleLoginButton={handleLoginButton} />
    </motion.div>
  );
};

export default LandingPage;
