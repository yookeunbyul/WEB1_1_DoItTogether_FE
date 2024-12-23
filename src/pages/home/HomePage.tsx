import React from 'react';
import { useHomePage } from '@/hooks/useHomePage';

import {
  GroupSelectSheet,
  HomeHeader,
  HouseworkList,
  NoList,
  WeeklyDateAndTab,
} from '@/components/home';

const HomePage: React.FC = () => {
  const {
    chargers,
    activeTab,
    setActiveTab,
    filteredHouseworks,
    handleAction,
    handleEdit,
    handleDelete,
  } = useHomePage();

  return (
    <div>
      <HomeHeader />
      <WeeklyDateAndTab
        activeTab={activeTab}
        handleSetActiveTab={setActiveTab}
        chargers={chargers}
      />
      {!filteredHouseworks || filteredHouseworks.length === 0 ? (
        <NoList />
      ) : (
        <HouseworkList
          items={filteredHouseworks}
          handleAction={handleAction}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      )}
      <GroupSelectSheet />
    </div>
  );
};

export default HomePage;
