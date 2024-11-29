import React, { Dispatch, SetStateAction, useState } from 'react';
import SurveyTitle from '@/components/survey/SurveyTitle/SurveyTitle';
import MenuSelect from '@/components/survey/MenuSelect/MenuSelect';

interface Step3Props {
  title: string;
  questions: string[];
  handleAnswer: (text: string) => void;
}

const Step3: React.FC<Step3Props> = ({ title, questions, handleAnswer }) => {
  const [activeItem, setActiveItem] = useState('');

  const handleSelect = (content: string) => {
    setActiveItem(content);
    handleAnswer(content);
  };

  return (
    <div className='flex flex-1 flex-col gap-3'>
      <div className='mb-5'>
        <SurveyTitle title={title} />
      </div>

      <div className='flex flex-wrap gap-3'>
        {questions.map(question => (
          <MenuSelect
            key={question}
            type='tight'
            status={activeItem === question ? 'active' : 'inActive'}
            content={question}
            handleSelect={() => handleSelect(question)}
          />
        ))}
      </div>
    </div>
  );
};

export default Step3;
