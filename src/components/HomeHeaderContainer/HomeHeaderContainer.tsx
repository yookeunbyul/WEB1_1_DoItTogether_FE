import GroupSelectBtn from './GroupSelectBtn/GroupSelectBtn';
import TitleDate from './TitleDate/TitleDate';

const HomeHeaderContainer = () => {
  return (
    <div className='bg-white02 flex items-center justify-between p-5'>
      <TitleDate dateText='2024년 11월 둘째 주' />
      <GroupSelectBtn groupName='우리집' />
    </div>
  );
};

export default HomeHeaderContainer;
