import Header from '@/components/common/header/Header';
import PresetTab from '@/components/common/tab/PresetTab/PresetTab';
import Tab from '@/components/common/tab/Tab/Tab';
import PresetAddInput from '@/components/setting/presetSetting/PresetAddInput';
import { useState } from 'react';

const PresetSettingPage = () => {
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

  /**
  {
    1: false,
    2: false,
    3: false
  } 
  */
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

  return (
    <div className='flex min-h-screen flex-col'>
      <Header title='프리셋 관리' isNeededBackBtn={true} isNeededDoneBtn={false} />
      <Tab activeTab={activeTab} handleSetActiveTab={setActiveTab} chargers={chargers} />
      <div className='mt-4 flex-1'>
        <PresetTab
          data={activeTab === '사용자 정의' ? mockData.userData : mockData.presetData}
          isInPresetSetting={true}
          deleteButtonStates={deleteButtonStates}
          handleSettingClick={handleSettingClick}
          handleDeleteClick={handleDeleteClick}
        />
      </div>
      <div className='bg-white sticky bottom-0'>
        <PresetAddInput />
      </div>
    </div>
  );
};

export default PresetSettingPage;
