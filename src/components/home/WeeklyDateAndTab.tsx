import React from 'react';
import WeeklyDate from '@/components/home/WeeklyDate/WeeklyDate';
import Tab, { TabProps } from '@/components/common/tab/Tab/Tab';

interface WeeklyDateAndTabProps extends TabProps {}

const WeeklyDateAndTab: React.FC<WeeklyDateAndTabProps> = ({
  activeTab,
  handleSetActiveTab,
  chargers,
}) => {
  return (
    <div className='bg-white sticky top-0 z-10'>
      <WeeklyDate />
      <Tab activeTab={activeTab} handleSetActiveTab={handleSetActiveTab} chargers={chargers} />
    </div>
  );
};

export default WeeklyDateAndTab;
