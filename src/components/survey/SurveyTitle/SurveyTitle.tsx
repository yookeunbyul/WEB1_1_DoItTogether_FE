interface SurveyTitleProps {
  title: string | JSX.Element;
}

const SurveyTitle = ({ title }: SurveyTitleProps) => {
  return <p className='font-title text-gray6 whitespace-pre-line'>{title}</p>;
};

export default SurveyTitle;
