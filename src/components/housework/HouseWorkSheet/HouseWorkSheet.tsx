import BottomSheet from '@/components/common/bottomSheet/BottomSheet';
import Button from '@/components/common/button/Button/Button';
import PresetTab from '@/components/common/tab/PresetTab/PresetTab';
import Tab from '@/components/common/tab/Tab/Tab';
import { housework } from '@/mock/addHousework';
import useAddHouseWorkStore from '@/store/useAddHouseWorkStore';
import { useState } from 'react';

interface HouseWorkSheetProps {
  /** 바텀시트 오픈 여부 */
  isOpen: boolean;
  /** isOpen 바꾸는 set함수 */
  setOpen: (isOpen: boolean) => void;
}

const HouseWorkSheet: React.FC<HouseWorkSheetProps> = ({ isOpen, setOpen }) => {
  const [activeTab, setActiveTab] = useState<string>('사용자 정의');
  const [selectedHouseWork, setSelectedHouseWork] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { setTask, setCategory } = useAddHouseWorkStore();

  const chargers = Object.keys(housework).map(key => ({
    name: key === 'userData' ? '사용자 정의' : '프리셋',
  }));

  const handleDoneClick = () => {
    if (selectedHouseWork) {
      setTask(selectedHouseWork);
    }
    if (selectedCategory) {
      setCategory(selectedCategory);
    }
    setOpen(false);
  };

  return (
    <BottomSheet isOpen={isOpen} setOpen={setOpen} title='집안일 선택'>
      <div className='flex min-h-96 flex-col gap-y-6 pb-6'>
        <section aria-label='집안일 할당 바텀 시트' className='flex flex-1 flex-col gap-6'>
          <div className='px-5'>
            <Tab activeTab={activeTab} handleSetActiveTab={setActiveTab} chargers={chargers} />
          </div>
          <PresetTab
            data={activeTab === '사용자 정의' ? housework.userData : housework.presetData}
            isBottomSheet={true}
            setSelectedHouseWork={setSelectedHouseWork}
            setSelectedCategory={setSelectedCategory}
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
