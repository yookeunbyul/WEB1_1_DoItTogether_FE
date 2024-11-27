import React, { useEffect, useState } from 'react';
import BackBtn from '@/components/common/button/BackBtn/BackBtn';
import { Progress } from '@/components/common/ui/progress';
import Step1 from '@/components/survey/steps/step1';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/common/ui/button';

const DUMMY_QUESTION = ['하지 않는다', '한 달에 1, 2회', '주에 1회', '주에 2, 3회', '매일'];

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
            title={`집안일 청소는\n 얼마나 자주 하세요?`}
            questions={DUMMY_QUESTION}
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
