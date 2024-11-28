import BottomNav from '@/components/common/bottomNav/BottomNav';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <div className='flex-1'>
        <Outlet />
      </div>
      <div className='bg-white sticky bottom-0 w-full'>
        <BottomNav />
      </div>
    </div>
  );
};

export default MainLayout;
