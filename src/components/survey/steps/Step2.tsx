import React, { useState } from 'react';
import SurveyTitle from '@/components/survey/SurveyTitle/SurveyTitle';
import MenuSelect from '@/components/survey/MenuSelect/MenuSelect';
import { motion } from 'framer-motion';

interface Step2Props {
  title: string;
  questions: string[];
  handleAnswer: (text: string) => void;
}

const Step2: React.FC<Step2Props> = ({ title, questions, handleAnswer }) => {
  const [activeItem, setActiveItem] = useState('');

  const handleSelect = (content: string) => {
    setActiveItem(content);
    handleAnswer(content);
  };

  const container = {
    hidden: { opacity: 0, y: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // 0.3초 동안 애니메이션 실행
        ease: 'easeIn', // 가속도 곡선 설정
      },
    },
  };

  return (
    <motion.div
      className='flex flex-1 flex-col gap-3'
      variants={container}
      initial='hidden'
      animate='show'
    >
      <div className='mb-5'>
        <SurveyTitle title={title} />
      </div>

      <div className='flex flex-wrap gap-3'>
        {questions.map(question => (
          <MenuSelect
            key={question}
            type='large'
            status={activeItem === question ? 'active' : 'inActive'}
            content={question}
            handleSelect={() => handleSelect(question)}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Step2;
