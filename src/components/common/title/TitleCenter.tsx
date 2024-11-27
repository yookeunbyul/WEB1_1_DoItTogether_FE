interface TitleCenterProps {
  /** 타이틀 */
  title: string;
}
const TitleCenter = ({ title }: TitleCenterProps) => {
  return (
    <p className='text-20 whitespace-pre-line text-center font-semibold text-black02'>{title}</p>
  );
};

export default TitleCenter;
