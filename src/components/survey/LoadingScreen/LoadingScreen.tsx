import SurveyIntroIcon from '@/components/survey/surveyIntro/SurveyIntroIcon';
import SurveyTitle from '@/components/survey/SurveyTitle/SurveyTitle';

interface LoadingScreenProps {
  /** 사용자명 */
  username: string;
  /** 분석완료 여부 */
  isCompleted: boolean;
}

const LoadingScreen = ({ username, isCompleted }: LoadingScreenProps) => {
  return (
    <div className='flex h-full flex-col gap-20 px-5 text-center'>
      <SurveyTitle
        title={
          <>
            <span className='font-bold text-gray02'>{username}</span> 님의
            <br />
            청소성향 {isCompleted ? '분석이 완료되었어요' : '분석하고 있어요'}
          </>
        }
      />
      <SurveyIntroIcon />
    </div>
  );
};

export default LoadingScreen;
