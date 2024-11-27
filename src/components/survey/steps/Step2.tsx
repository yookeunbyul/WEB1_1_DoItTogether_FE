import React, { Dispatch, SetStateAction, useState } from 'react';
import SurveyTitle from '@/components/survey/SurveyTitle/SurveyTitle';
import MenuSelect from '@/components/survey/MenuSelect/MenuSelect';

interface Step2Props {
  title: string;
  questions: string[];
  handleAnswer: Dispatch<SetStateAction<string>>;
}

const Step2: React.FC<Step2Props> = ({ title, questions, handleAnswer }) => {
  const [activeItem, setActiveItem] = useState('');

  const handleSelect = (content: string) => {
    setActiveItem(content);
  };

  return (
    <div className='flex flex-1 flex-col gap-3'>
      <div className='mb-5'>
        <SurveyTitle title={title} />
      </div>

      <div className='flex flex-wrap gap-3'>
        {questions.map(question => (
          <MenuSelect
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

export default Step2;
