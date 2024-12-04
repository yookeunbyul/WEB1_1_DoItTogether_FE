import Header from '@/components/common/header/Header';
import PresetTab from '@/components/common/tab/PresetTab/PresetTab';
import Tab from '@/components/common/tab/Tab/Tab';
import PresetAddInput from '@/components/setting/presetSetting/PresetAddInput';
import { PresetTabName } from '@/constants';
import { convertTabNameToChargers } from '@/utils/convertUtils';
import usePresetSetting from '@/hooks/usePresetSetting';
import usePresetSettingStore from '@/store/usePresetSettingStore';

const PresetSettingPage = () => {
  const { categoryList, activeTab, setActiveTab, deleteButtonStates, presetData } =
    usePresetSettingStore();
  const { handleAddInput, handleSelectClick, handleDeleteClick, handleBack } = usePresetSetting();

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
      {activeTab === PresetTabName.USER_DATA ? (
        <>
          <div className='mt-5 flex-1'>
            <PresetTab
              presetData={presetData}
              isPresetSettingCustom={true}
              deleteButtonStates={deleteButtonStates}
              handleDeleteClick={handleDeleteClick}
              handleClick={handleSelectClick}
            />
          </div>
          <div className='sticky bottom-0 bg-[#fff]'>
            <PresetAddInput categoryList={categoryList} handleAddInput={handleAddInput} />
          </div>
        </>
      ) : (
        <div className='mt-5 flex-1'>
          <PresetTab presetData={presetData} isPresetSettingCustom={false} />
        </div>
      )}
    </div>
  );
};

export default PresetSettingPage;