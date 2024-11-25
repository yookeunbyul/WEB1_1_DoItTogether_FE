import AddHouseWorkBtn from './AddHouseWorkBtn/AddHouseWorkBtn';
import BottomNavBtn from './BottomNavBtn/BottomNavBtn';

const BottomNavContainer = () => {
  const navItems = [
    { name: '홈', icon: null },
    { name: '통계', icon: null },
    { name: '설정', icon: null },
    { name: '마이', icon: null },
  ];

  return (
    <div className='flex w-full max-w justify-between bg-white02 px-5 py-2'>
      <BottomNavBtn icon={navItems[0].icon} name={navItems[0].name} />
      <BottomNavBtn icon={navItems[1].icon} name={navItems[1].name} />
      <AddHouseWorkBtn />
      <BottomNavBtn icon={navItems[2].icon} name={navItems[2].name} />
      <BottomNavBtn icon={navItems[3].icon} name={navItems[3].name} />
    </div>
  );
};

export default BottomNavContainer;
