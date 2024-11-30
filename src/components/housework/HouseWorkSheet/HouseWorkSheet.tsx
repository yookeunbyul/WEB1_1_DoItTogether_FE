import { useState } from 'react';
import BottomSheet from '@/components/common/bottomSheet/BottomSheet';
import Button from '@/components/common/button/Button/Button';
import PresetTab from '@/components/common/tab/PresetTab/PresetTab';
import Tab from '@/components/common/tab/Tab/Tab';
import useAddHouseWorkStore from '@/store/useAddHouseWorkStore';
import { mockData } from '@/mock/mockPresetSettingPage';
import { PresetDefault, PresetTabName } from '@/constants';
import { convertTabNameToChargers } from '@/utils/convertUtils';

interface HouseWorkSheetProps {
  /** 바텀시트 오픈 여부 */
  isOpen: boolean;
  /** isOpen 바꾸는 set함수 */
  setOpen: (isOpen: boolean) => void;
}

const HouseWorkSheet: React.FC<HouseWorkSheetProps> = ({ isOpen, setOpen }) => {
  const [activeTab, setActiveTab] = useState<string>(PresetTabName.PRESET_DATA);
  const [selectedHouseWork, setSelectedHouseWork] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const { setTask, setCategory } = useAddHouseWorkStore();

  const handleDoneClick = () => {
    if (selectedHouseWork) {
      setTask(selectedHouseWork);
    }
    if (selectedCategory) {
      setCategory(selectedCategory);
    }
    setOpen(false);
  };

  const handleClick = (id: number, description: string, category: string) => {
    setSelectedItem(selectedItem === id ? null : id); //id가 같으면 선택해제되도록

    console.log(id, category);

    if (setSelectedHouseWork) {
      setSelectedHouseWork(description);
    }
    if (setSelectedCategory) {
      setSelectedCategory(category);
    }
  };

  const getPresetData = () => {
    return activeTab === PresetTabName.USER_DATA ? mockData.userData : PresetDefault;
  };

  return (
    <BottomSheet isOpen={isOpen} setOpen={setOpen} title='집안일 선택'>
      <div className='flex min-h-96 flex-col gap-y-6 pb-6'>
        <section aria-label='집안일 할당 바텀 시트' className='flex flex-1 flex-col gap-6'>
          <div>
            <Tab
              activeTab={activeTab}
              handleSetActiveTab={setActiveTab}
              chargers={convertTabNameToChargers(PresetTabName)}
            />
          </div>
          <PresetTab
            data={getPresetData()}
            isBottomSheet={true}
            handleClick={handleClick}
            selectedItem={selectedItem}
          />
        </section>
        <div className='px-5'>
          <Button label='완료' variant='full' size='large' handleClick={handleDoneClick} />
        </div>
      </div>
    </BottomSheet>
  );
};

export default HouseWorkSheet;
