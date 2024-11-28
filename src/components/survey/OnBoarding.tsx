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
const DUMMY_QUESTION_STEP3 = ['시간부족', '적합한 도구나 제품 부족', '체력부족', '동기부족'];
const DUMMY_QUESTION_STEP4 = ['거실', '주방', '화장실', '침실'];

interface OnBoardingProps {}

const OnBoarding: React.FC<OnBoardingProps> = ({}) => {
  const [step, setStep] = useState(1);
  const [answer, setAnswer] = useState<string>(''); // 사용자 답변
  const [isCompleted, setIsCompleted] = useState<boolean>(false); // 분석완료 여부
  const [result, setResult] = useState<string[]>([]); // 분석 결과
  const [username, setUsername] = useState<string>('사용자'); // 사용자명
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const setNextStep = () => {
    if (step === 4) {
      setLoading(true);
      setIsCompleted(false);

      // API CALL
      setTimeout(() => {
        const DUMMY_RESULT = [
          '규칙적으로 청소',
          '나 자신을 위해',
          '청소 각오는 만땅!',
          '화장실 청소 좋아!',
        ];
        // API 데이터 저장
        setResult(DUMMY_RESULT);
        setIsCompleted(true);

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }, 1000); // 1초 동안 메세지 표시
    }
    if (step === 5) {
      navigate('/group-select');
    }
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
        {loading ? (
          <LoadingScreen username={username} isCompleted={isCompleted} />
        ) : (
          <>
            {/* TODO STEP 동일구조라서 hook 으로 사용 고려 */}
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
            {step === 3 && (
              <Step3
                title={`청소할 때 가장 어려운 점은\n무엇인가요?`}
                questions={DUMMY_QUESTION_STEP3}
                handleAnswer={setAnswer}
              />
            )}
            {step === 4 && (
              <Step4
                title={`청소할 때 최우선으로\n신경 쓰는 공간을 알려주세요!`}
                questions={DUMMY_QUESTION_STEP4}
                handleAnswer={setAnswer}
              />
            )}
            {step === 5 && <Step5 title={`${username}님의 청소성향은`} results={result} />}
          </>
        )}

        {!loading && (
          <Button size={'large'} onClick={setNextStep}>
            {step === 5 ? '확인' : '다음'}
          </Button>
        )}
      </div>
    </div>
  );
};

export default OnBoarding;
