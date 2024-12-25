import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { postPersonalKeyword } from '@/services/onboarding/postPersonalKeyword';
import { patchMyInitState } from '@/services/user/patchMyInitState';
import { getMyInfo } from '@/services/user/getMyInfo';
import {
  DUMMY_QUESTION_STEP1,
  DUMMY_QUESTION_STEP2,
  DUMMY_QUESTION_STEP3,
  DUMMY_QUESTION_STEP4,
} from '@/constants/onBoarding';

export const useSurvey = () => {
  const [step, setStep] = useState(1);
  const [progressStep, setProgressStep] = useState(1);
  const [answer, setAnswer] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [result, setResult] = useState<string[]>([]);
  const [username, setUserName] = useState<string>('사용자');
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMyInfo = async () => {
      try {
        const response = await getMyInfo();
        setUserName(response.result.nickName);
      } catch (error) {
        console.error('내 정보 조회 실패:', error);
      }
    };

    fetchMyInfo();
  }, []);

  useEffect(() => {
    if (step === 0) navigate('/survey-intro');
  }, [step, navigate]);

  const setNextStep = async () => {
    if (step === 4) {
      setProgressStep(5);
      await new Promise(resolve => setTimeout(resolve, 500));
      setStep(prev => prev + 1);
      setLoading(true);
      setIsCompleted(false);
      await new Promise(resolve => setTimeout(resolve, 2000));

      try {
        const response = await postPersonalKeyword({
          surveyResultText: answer,
        });
        setResult(response.result.keywords);
        setIsCompleted(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLoading(false);
      } catch (error) {
        console.error('성향 분석 실패:', error);
        setLoading(false);
      }
      return;
    }

    if (step === 5) {
      try {
        await patchMyInitState();
        navigate('/group-select');
      } catch (error) {
        console.error('초기 상태 변경 실패:', error);
      }
      return;
    }

    setStep(prev => prev + 1);
    setProgressStep(prev => prev + 1);
  };

  const setPrevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleAnswer = (select: string) => {
    setAnswer(prev => [...prev, select]);
  };

  const isStepValid = () => {
    if (step === 5) return true;
    return answer.length >= step;
  };

  const stepComponents = [
    {
      questions: DUMMY_QUESTION_STEP1,
      title: `평소 정리정돈에 대해\n어떻게 생각하시나요?`,
    },
    {
      questions: DUMMY_QUESTION_STEP2,
      title: `어떤 방식으로 일하는 것을\n선호하시나요?`,
    },
    {
      questions: DUMMY_QUESTION_STEP3,
      title: `주변 환경이\n작업에 얼마나 영향을 주나요?`,
    },
    {
      questions: DUMMY_QUESTION_STEP4,
      title: `집안일을 할 때\n어떤 감정을 느끼시나요?`,
    },
  ];

  return {
    step,
    progressStep,
    answer,
    isCompleted,
    result,
    username,
    loading,
    setNextStep,
    setPrevStep,
    handleAnswer,
    isStepValid,
    stepComponents,
  };
};
