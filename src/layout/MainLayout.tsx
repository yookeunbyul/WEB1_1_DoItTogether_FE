import BottomNavContainer from '@/components/common/BottomNavContainer/BottomNavContainer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <div className='flex-1'>
        <Outlet />
      </div>
      <div className='bg-white fixed bottom-0 w-full'>
        <BottomNavContainer />
      </div>
    </div>
  );
};

export default MainLayout;
