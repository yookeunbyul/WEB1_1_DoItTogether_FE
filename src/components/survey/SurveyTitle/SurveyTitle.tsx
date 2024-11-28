interface SurveyTitleProps {
  title: string | JSX.Element;
}

const SurveyTitle = ({ title }: SurveyTitleProps) => {
  return <p className='whitespace-pre-line text-20 font-semibold text-black02'>{title}</p>;
};

export default SurveyTitle;
