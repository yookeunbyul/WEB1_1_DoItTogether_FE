import SurveyIntroIcon from '@/components/survey/surveyIntro/SurveyIntroIcon';
import SurveyTitle from '@/components/survey/SurveyTitle/SurveyTitle';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  /** 사용자명 */
  username: string;
  /** 분석완료 여부 */
  isCompleted: boolean;
}

const LoadingScreen = ({ username, isCompleted }: LoadingScreenProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.7, // 각 요소 사이의 딜레이
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // 0.3초 동안 애니메이션 실행
        ease: 'easeIn', // 가속도 곡선 설정
      },
    },
  };

  return (
    <motion.div
      className='flex h-full flex-col gap-20 px-5 text-center'
      variants={container}
      initial='hidden'
      animate='show'
    >
      <motion.div variants={item}>
        <SurveyTitle
          title={
            <div className='text-center'>
              {isCompleted
                ? `${username}님의\n청소성향 분석이 완료되었어요`
                : 'gpi 4.o가\n당신의 청소성향을 분석하고 있어요'}
            </div>
          }
        />
      </motion.div>
      <motion.div variants={item}>
        <SurveyIntroIcon />
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
