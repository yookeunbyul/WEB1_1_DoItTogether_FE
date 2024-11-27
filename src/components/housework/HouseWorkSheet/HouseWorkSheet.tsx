import BottomSheet from '@/components/common/bottomSheet/BottomSheet';
import Button from '@/components/common/button/Button/Button';
import PresetTab from '@/components/common/tab/PresetTab/PresetTab';
import Tab from '@/components/common/tab/Tab';
import { useState } from 'react';

interface HouseWorkSheetProps {
  /** 바텀시트 오픈 여부 */
  isOpen: boolean;
  /** isOpen 바꾸는 set함수 */
  setOpen: (isOpen: boolean) => void;
}

const HouseWorkSheet: React.FC<HouseWorkSheetProps> = ({ isOpen, setOpen }) => {
  const mockData = {
    userData: [
      {
        category: '거실',
        items: [{ id: 1, description: '매일 아침 화장실 청소하기' }],
      },
      {
        category: '부엌',
        items: [{ id: 2, description: '아침 식사 후 설거지하기' }],
      },
      {
        category: '1번 방',
        items: [{ id: 3, description: '1번 방 바닥 청소' }],
      },
      {
        category: '2번 방',
        items: [{ id: 4, description: '2번 방 옷장 정리' }],
      },
      {
        category: '3번 방',
        items: [{ id: 5, description: '3번 방 나가기' }],
      },
    ],
    presetData: [
      {
        category: '거실',
        items: [
          { id: 1, description: '매일 아침 화장실 청소하기' },
          { id: 2, description: '거실 바닥 청소하기' },
          { id: 3, description: '거실 청소기 돌리기' },
        ],
      },
      {
        category: '부엌',
        items: [
          { id: 4, description: '아침 식사 후 설거지하기' },
          { id: 5, description: '저녁 식사 후 설거지하기' },
          { id: 6, description: '오븐 청소' },
        ],
      },
      {
        category: '1번 방',
        items: [{ id: 7, description: '1번 방 청소' }],
      },
      {
        category: '2번 방',
        items: [{ id: 8, description: '2번 방 청소' }],
      },
      {
        category: '3번 방',
        items: [{ id: 9, description: '3번 방 청소' }],
      },
    ],
  };

  const [activeTab, setActiveTab] = useState<string>('사용자 정의');
  const chargers = Object.keys(mockData).map(key => ({
    name: key === 'userData' ? '사용자 정의' : '프리셋',
  }));
  const handleDoneClick = () => {
    setOpen(false);
  };

  return (
    <BottomSheet isOpen={isOpen} setOpen={setOpen} title='집안일 선택'>
      <div className='mt-4 flex min-h-96 flex-col gap-y-6 pb-6'>
        <section aria-label='집안일 할당 바텀 시트' className='flex flex-1 flex-col gap-6'>
          <Tab activeTab={activeTab} handleSetActiveTab={setActiveTab} chargers={chargers} />
          <PresetTab data={activeTab === '사용자 정의' ? mockData.userData : mockData.presetData} />
        </section>
        <div className='px-5'>
          <Button label='선택 완료' variant='full' size='large' handleClick={handleDoneClick} />
        </div>
      </div>
    </BottomSheet>
  );
};

export default HouseWorkSheet;
