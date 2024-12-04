import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackBtn from '@/components/common/button/BackBtn/BackBtn';
import { Progress } from '@/components/common/ui/progress';
import { Button } from '@/components/common/ui/button';
import Step1 from '@/components/survey/steps/Step1';
import Step2 from '@/components/survey/steps/Step2';
import Step3 from '@/components/survey/steps/Step3';
import Step4 from '@/components/survey/steps/Step4';
import Step5 from '@/components/survey/steps/Step5';
import LoadingScreen from '@/components/survey/LoadingScreen/LoadingScreen';
import {
  DUMMY_QUESTION_STEP1,
  DUMMY_QUESTION_STEP2,
  DUMMY_QUESTION_STEP3,
  DUMMY_QUESTION_STEP4,
  DUMMY_RESULT,
} from '@/constants/onBoarding';
import { motion } from 'framer-motion';

interface OnBoardingProps {}

interface Answers {
  step1: string;
  step2: string;
  step3: string;
  step4: string;
}

const OnBoarding: React.FC<OnBoardingProps> = ({}) => {
  const [step, setStep] = useState(1);
  const [answer, setAnswer] = useState<Answers>({
    step1: '',
    step2: '',
    step3: '',
    step4: '',
  }); // 사용자 답변
  const [isCompleted, setIsCompleted] = useState<boolean>(false); // 분석완료 여부
  const [result, setResult] = useState<string[]>([]); // 분석 결과
  const [username] = useState<string>('사용자'); // 사용자명
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5, // 0.3초 동안 애니메이션 실행
        ease: 'easeIn', // 가속도 곡선 설정
      },
    },
  };

  const setNextStep = () => {
    if (step === 4) {
      setLoading(true);
      setIsCompleted(false);

      // API CALL
      setTimeout(() => {
        // API 데이터 저장
        setResult(DUMMY_RESULT);
        setIsCompleted(true);

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }, 2000); // 1초 동안 메세지 표시
    }
    if (step === 5) {
      navigate('/group-select');
    }
    setStep(prev => prev + 1);
  };

  const setPrevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleAnswer = (select: string) => {
    setAnswer(prev => ({
      ...prev,
      [`step${step}`]: select,
    }));
  };

  type StepKey = keyof Answers;

  const isStepVaild = () => {
    if (step === 5) return true; //결과는 항상 활성화
    const currentStep = `step${step}` as StepKey;
    return answer[currentStep] !== ''; //빈값이 아니면 true
  };

  useEffect(() => {
    if (step === 0) navigate('/survey-intro');
    console.log(answer);
  }, [step]);

  return (
    <div className='flex h-screen flex-col overflow-hidden'>
      {step <= 4 && (
        <motion.div variants={item} initial='hidden' animate='show'>
          <div className='p-5'>
            <BackBtn handleClick={setPrevStep} />
          </div>
          <Progress value={(step / 5) * 100} className='mb-8' />
        </motion.div>
      )}

      {loading ? (
        <div className='h-full px-0 pt-28'>
          <LoadingScreen username={username} isCompleted={isCompleted} />
        </div>
      ) : (
        <motion.div className='flex h-screen flex-col gap-8 px-5'>
          {/* TODO STEP 동일구조라서 hook 으로 사용 고려 */}
          {step === 1 && (
            <Step1
              title={`평소 정리정돈에 대해\n어떻게 생각하시나요?`}
              questions={DUMMY_QUESTION_STEP1}
              handleAnswer={handleAnswer}
            />
          )}
          {step === 2 && (
            <Step2
              title={`어떤 방식으로 일하는 것을\n선호하시나요?`}
              questions={DUMMY_QUESTION_STEP2}
              handleAnswer={handleAnswer}
            />
          )}
          {step === 3 && (
            <Step3
              title={`주변 환경이\n작업에 얼마나 영향을 주나요?`}
              questions={DUMMY_QUESTION_STEP3}
              handleAnswer={handleAnswer}
            />
          )}
          {step === 4 && (
            <Step4
              title={`집안일을 할 때\n어떤 감정을 느끼시나요?`}
              questions={DUMMY_QUESTION_STEP4}
              handleAnswer={handleAnswer}
            />
          )}
          {step === 5 && (
            <div className='h-full pt-28'>
              <Step5 title={`${username}님의 청소성향은`} results={result} />
            </div>
          )}
        </motion.div>
      )}

      {!loading && (
        <motion.div className='bg-white sticky bottom-0 px-5 pb-6'>
          <Button
            size={'large'}
            variant={!isStepVaild() ? 'disabled' : 'full'}
            onClick={setNextStep}
            disabled={!isStepVaild()}
          >
            {step === 5 ? '완료' : '다음'}
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default OnBoarding;