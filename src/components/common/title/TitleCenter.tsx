interface TitleCenterProps {
  /** 타이틀 */
  title: string;
}
const TitleCenter = ({ title }: TitleCenterProps) => {
  return <p className='whitespace-pre-line text-center text-20 font-semibold text-gray'>{title}</p>;
};

export default TitleCenter;
