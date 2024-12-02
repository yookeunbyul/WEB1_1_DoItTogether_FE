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
            <>
              <span className='font-bold text-gray02'>{username}</span> 님의
              <br />
              청소성향 {isCompleted ? '분석이 완료되었어요' : '분석하고 있어요'}
            </>
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
