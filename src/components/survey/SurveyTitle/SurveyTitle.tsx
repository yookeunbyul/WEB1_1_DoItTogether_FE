interface SurveyTitleProps {
  title: string | JSX.Element;
}

const SurveyTitle = ({ title }: SurveyTitleProps) => {
  return <p className='whitespace-pre-line text-gray font-title'>{title}</p>;
};

export default SurveyTitle;
