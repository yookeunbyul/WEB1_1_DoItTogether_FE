import React, { Dispatch, SetStateAction, useState } from 'react';
import SurveyTitle from '@/components/survey/SurveyTitle/SurveyTitle';
import MenuSelect from '@/components/survey/MenuSelect/MenuSelect';

interface Step1Props {
  title: string;
  questions: string[];
  handleAnswer: Dispatch<SetStateAction<string>>;
}

const Step1: React.FC<Step1Props> = ({ title, questions, handleAnswer }) => {
  const [activeItem, setActiveItem] = useState('');

  const handleSelect = (content: string) => {
    setActiveItem(content);
  };

  return (
    <div className='flex flex-1 flex-col gap-3'>
      <div className='mb-5'>
        <SurveyTitle title={title} />
      </div>

      {questions.map(question => (
        <MenuSelect
          type='full'
          status={activeItem === question ? 'active' : 'inActive'}
          content={question}
          handleSelect={() => handleSelect(question)}
        />
      ))}
    </div>
  );
};

export default Step1;
