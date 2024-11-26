import { Outlet } from 'react-router-dom';
import TabContainer from '@/components/common/TabContainer/TabContainer';
import { useState } from 'react';

const STAT_DATA = [{ name: '주간' }, { name: '월간' }];

const StatisticsLayout = () => {
  const [statTab, setStatTab] = useState('주간');

  return (
    <div>
      <div className='bg-white sticky top-0 w-full'>
        <TabContainer activeTab={statTab} handleSetActiveTab={setStatTab} chargers={STAT_DATA} />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default StatisticsLayout;
