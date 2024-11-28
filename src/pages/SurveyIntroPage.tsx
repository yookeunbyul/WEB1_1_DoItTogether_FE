import Button from '@/components/common/button/Button/Button';
import SurveyTitle from '@/components/survey/SurveyTitle/SurveyTitle';
import SurveyIntroDesc from '@/components/survey/surveyIntro/SurveyIntroDesc';
import SurveyIntroIcon from '@/components/survey/surveyIntro/SurveyIntroIcon';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface SurveyIntroPageProps {}

const SurveyIntroPage: React.FC<SurveyIntroPageProps> = ({}) => {
  const navigate = useNavigate();

  return (
    <div className='flex h-screen flex-col justify-between px-5 pt-10'>
      <div className='flex flex-col gap-5'>
        <SurveyTitle title={`당신만의 청소 스타일을\n완성해보세요`} />
        <SurveyIntroDesc />
      </div>
      <SurveyIntroIcon />
      <Button
        size='large'
        variant='full'
        label='시작하기'
        handleClick={() => navigate('/survey')}
      />
    </div>
  );
};

export default SurveyIntroPage;
