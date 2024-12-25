import React from 'react';
import { motion } from 'framer-motion';
import BackBtn from '@/components/common/button/BackBtn/BackBtn';
import { Progress } from '@/components/common/ui/progress';
import { Button } from '@/components/common/ui/button';
import { Step1, Step2, Step3, Step4, Step5, LoadingScreen } from '@/components/survey';
import { useSurvey } from '@/hooks/useSurvey';

const SurveyPage: React.FC = () => {
  const {
    step,
    progressStep,
    isCompleted,
    result,
    username,
    loading,
    setNextStep,
    setPrevStep,
    handleAnswer,
    isStepValid,
    stepComponents,
  } = useSurvey();

  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeIn',
      },
    },
  };

  const renderStep = () => {
    if (step <= 4) {
      const StepComponent = [Step1, Step2, Step3, Step4][step - 1];
      const { questions, title } = stepComponents[step - 1];
      return <StepComponent title={title} questions={questions} handleAnswer={handleAnswer} />;
    }
    return (
      <div className='h-full pt-28'>
        <Step5 title={`${username}님의 청소성향은`} results={result} />
      </div>
    );
  };

  const renderContent = () => (
    <motion.div
      className='flex flex-1 flex-col gap-8 px-5'
      variants={item}
      initial='hidden'
      animate='show'
    >
      {renderStep()}
    </motion.div>
  );

  const renderButton = () => (
    <motion.div className='sticky bottom-6 bg-white px-5'>
      <Button
        size={'large'}
        variant={!isStepValid() ? 'disabled' : 'full'}
        onClick={setNextStep}
        disabled={!isStepValid()}
      >
        {step === 5 ? '완료' : '다음'}
      </Button>
    </motion.div>
  );

  return (
    <div className={`flex h-screen flex-col`}>
      {step <= 4 && (
        <motion.div variants={item} initial='hidden' animate='show'>
          <div className='p-5'>
            <BackBtn handleClick={setPrevStep} />
          </div>
          <Progress value={(progressStep / 5) * 100} className='mb-8' />
        </motion.div>
      )}

      {loading ? (
        <div className='h-full px-0'>
          <LoadingScreen username={username} isCompleted={isCompleted} />
        </div>
      ) : (
        <>
          {renderContent()}
          {renderButton()}
        </>
      )}
    </div>
  );
};

export default SurveyPage;
