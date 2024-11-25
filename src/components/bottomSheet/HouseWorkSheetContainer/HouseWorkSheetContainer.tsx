import BottomSheetContainer from '@/components/common/BottomSheetContainer/BottomSheetContainer';
import PresetTabContainer from '@/components/PresetTabContainer/PresetTabContainer';
import { useState } from 'react';

interface PresetData {
  category: string;
  items: {
    id: number;
    description: string;
  }[];
}

interface HouseWorkSheetContainerProps {}

const HouseWorkSheetContainer: React.FC<HouseWorkSheetContainerProps> = ({}) => {
  const [isOpen, setOpen] = useState(true);

  const presetData: PresetData[] = [
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
  ];

  return (
    <BottomSheetContainer isOpen={isOpen} setOpen={setOpen} title='집안일 선택'>
      <div className='mt-4 flex min-h-96 flex-col gap-y-6 pb-6'>
        <PresetTabContainer data={presetData} />
      </div>
    </BottomSheetContainer>
  );
};

export default HouseWorkSheetContainer;
