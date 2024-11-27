import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackBtn from '@/components/common/button/BackBtn/BackBtn';
import { Progress } from '@/components/common/ui/progress';
import { Button } from '@/components/common/ui/button';
import Step1 from '@/components/survey/steps/Step1';
import Step2 from '@/components/survey/steps/Step2';

// TODO 질문지 TITLE, QUESTION 하드코딩 하지말고, 상수파일로 관리하고 여기서는 가져와서 사용
const DUMMY_QUESTION_STEP1 = [
  '하지 않는다',
  '한 달에 1, 2회',
  '주에 1회',
  '가족이나 동거인의 요구',
  '매일',
];
const DUMMY_QUESTION_STEP2 = [
  '손님방문',
  '개인 위생 및 청결',
  '정리정돈의 욕구',
  '가족이나 동거인의 요구',
];

interface OnBoardingProps {}

const OnBoarding: React.FC<OnBoardingProps> = ({}) => {
  const [step, setStep] = useState(1);
  const [answer, setAnswer] = useState<string>('');
  const [result, setResult] = useState<string[]>([]);
  const navigate = useNavigate();

  const setNextStep = () => {
    setStep(prev => prev + 1);
  };

  const setPrevStep = () => {
    setStep(prev => prev - 1);
  };

  useEffect(() => {
    if (step === 0) navigate('/survey-intro');
  }, [step]);

  return (
    <div className='flex h-screen flex-col gap-3'>
      <div className='p-5'>
        <BackBtn handleClick={setPrevStep} />
      </div>

      <Progress value={(step / 5) * 100} className='mb-8' />
      <div className='flex h-screen flex-col gap-8 px-5'>
        {step === 1 && (
          <Step1
            title={`집안일 청소는\n얼마나 자주 하세요?`}
            questions={DUMMY_QUESTION_STEP1}
            handleAnswer={setAnswer}
          />
        )}
        {step === 2 && (
          <Step2
            title={`주로 어떤 이유로\n청소를 하시나요?`}
            questions={DUMMY_QUESTION_STEP2}
            handleAnswer={setAnswer}
          />
        )}

        <Button size={'large'} onClick={setNextStep}>
          이거 상태 관리
        </Button>
      </div>
    </div>
  );
};

export default OnBoarding;
