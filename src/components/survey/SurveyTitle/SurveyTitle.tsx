interface SurveyTitleProps {
  title: string | JSX.Element;
}

const SurveyTitle = ({ title }: SurveyTitleProps) => {
  return <div className='whitespace-pre-line text-gray font-title'>{title}</div>;
};

export default SurveyTitle;
