interface SurveyTitleProps {
  title: string;
}

const SurveyTitle = ({ title }: SurveyTitleProps) => {
  return <p className='whitespace-pre-line text-24 font-semibold text-black02'>{title}</p>;
};

export default SurveyTitle;
