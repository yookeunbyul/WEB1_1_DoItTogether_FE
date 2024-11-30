import Header from '@/components/common/header/Header';
import PresetTab from '@/components/common/tab/PresetTab/PresetTab';
import Tab from '@/components/common/tab/Tab/Tab';
import PresetAddInput from '@/components/setting/presetSetting/PresetAddInput';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockData } from '@/mock/mockPresetSettingPage';
import { PresetDefault, PresetTabName } from '@/constants';
import { convertTabNameToChargers } from '@/utils/convertUtils';

const PresetSettingPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>(PresetTabName.USER_DATA);
  const [deleteButtonStates, setDeleteButtonStates] = useState<Record<number, boolean>>({});

  const handleSettingClick = (itemId: number) => {
    setDeleteButtonStates(prev => ({
      ...prev,
      [itemId]: true,
    }));
  };

  const handleDeleteClick = (itemId: number) => {
    setDeleteButtonStates(prev => ({
      ...prev,
      [itemId]: false,
    }));
  };

  const handleBack = () => {
    navigate(-1);
  };

  const getPresetData = () => {
    return activeTab === PresetTabName.USER_DATA ? mockData.userData : PresetDefault;
  };

  return (
    <div className='flex min-h-screen flex-col'>
      <div className='sticky top-0 z-10 bg-[#fff]'>
        <Header title='프리셋 관리' isNeededDoneBtn={false} handleBack={handleBack} />
        <Tab
          activeTab={activeTab}
          handleSetActiveTab={setActiveTab}
          chargers={convertTabNameToChargers(PresetTabName)}
        />
      </div>
      <div className='mt-5 flex-1'>
        <PresetTab
          data={getPresetData()}
          isInPresetSetting={true}
          deleteButtonStates={deleteButtonStates}
          handleSettingClick={handleSettingClick}
          handleDeleteClick={handleDeleteClick}
        />
      </div>
      <div className='sticky bottom-0 bg-[#fff]'>
        <PresetAddInput />
      </div>
    </div>
  );
};

export default PresetSettingPage;
