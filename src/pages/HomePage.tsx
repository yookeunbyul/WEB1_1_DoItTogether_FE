import React, { useEffect, useState } from 'react';
import HomeHeader from '@/components/home/HomeHeader/HomeHeader';
import WeeklyDateAndTab from '@/components/home/WeeklyDateAndTab';
import HouseworkList from '@/components/home/HouseworkList/HouseworkList';
import GroupSelectSheet from '@/components/home/GroupSelectSheet/GroupSelectSheet';
import useHomePageStore from '@/store/useHomePageStore';
import getWeekText from '@/utils/getWeekText';
import { DUMMY_HOUSEWORKS } from '@/mock/mockHomePage';

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('전체');
  const [houseworkList, setHouseworkList] = useState(DUMMY_HOUSEWORKS);
  const { setWeekText } = useHomePageStore();

  const chargers = [
    { name: '전체' },
    ...Array.from(new Set(DUMMY_HOUSEWORKS.map(item => item.charger))).map(charger => ({
      name: charger,
    })),
  ];

  useEffect(() => {
    setWeekText(getWeekText(new Date()));
  }, []);

  const handleAction = (id: number) => {
    setHouseworkList(
      houseworkList.map(housework => {
        if (housework.id === id) {
          return {
            ...housework,
            actionStatus: housework.actionStatus === 'complete' ? 'incomplete' : 'complete',
          };
        }
        return housework;
      })
    );
  };
  const handleEdit = () => {
    console.log('edit');
  };
  const handleDelete = (id: number) => {
    setHouseworkList(houseworkList.filter(housework => housework.id !== id));
  };

  return (
    <div>
      <HomeHeader />
      <WeeklyDateAndTab
        activeTab={activeTab}
        handleSetActiveTab={setActiveTab}
        chargers={chargers}
      />
      <HouseworkList
        items={houseworkList.filter(item => item.charger === activeTab || activeTab === '전체')}
        handleAction={handleAction}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <GroupSelectSheet />
    </div>
  );
};

export default HomePage;
