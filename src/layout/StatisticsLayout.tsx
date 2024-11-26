import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Tab from '@/components/common/tab/Tab';

const STAT_DATA = [{ name: '주간' }, { name: '월간' }];

const StatisticsLayout = () => {
  const [statTab, setStatTab] = useState('주간');
  const navigate = useNavigate();

  useEffect(() => {
    if (statTab === '주간') {
      navigate('weekly');
    } else if (statTab === '월간') {
      navigate('monthly');
    }
  }, [statTab, navigate]);

  return (
    <div>
      <div className='bg-white sticky top-0 w-full'>
        <Tab activeTab={statTab} handleSetActiveTab={setStatTab} chargers={STAT_DATA} />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default StatisticsLayout;
