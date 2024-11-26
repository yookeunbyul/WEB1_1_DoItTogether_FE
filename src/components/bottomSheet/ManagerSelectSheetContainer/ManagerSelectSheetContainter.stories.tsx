import BottomSheetContainer from '@/components/common/BottomSheetContainer/BottomSheetContainer';
import ManagerSelectSheetContainer from '@/components/bottomSheet/ManagerSelectSheetContainer/ManagerSelectSheetContainer';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Button from '@/components/common/ButtonContainer/Button/Button';
import ManagerSelectContainer from '@/components/ManagerSelectContainer/ManagerSelectContainer';

const meta = {
  title: 'components/common/bottomSheet/ManagerSelectSheetContainer',
  component: ManagerSelectSheetContainer,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      description: '시트 오픈 여부',
      control: 'boolean',
    },
    setIsOpen: {
      description: '바텀시트 여는 set함수',
    },
    selectedMember: {
      description: '선택된 멤버',
      control: 'text',
    },
    handleSetSelectMember: {
      description: '담당자 선택하는 set 함수',
    },
    handleDoneClick: {
      description: '선택 후 처리하는 함수',
    },
  },
} satisfies Meta<typeof ManagerSelectSheetContainer>;

export default meta;

const BottomSheetWithManager = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState('');

  const handleDoneClick = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Bottom Sheet</button>
      <BottomSheetContainer isOpen={isOpen} setOpen={setOpen} title='바텀시트 제목'>
        <div className='flex flex-col gap-y-6 px-5 pb-6'>
          <ManagerSelectContainer
            selectedMember={selectedMember}
            handleSelectMember={setSelectedMember}
          />
          <Button label='완료' variant='full' size='large' handleClick={handleDoneClick} />
          <button className='text-14 underline'>AI가 딱 맞는 사람을 선택할게요</button>
        </div>
      </BottomSheetContainer>
    </>
  );
};

type Story = StoryObj<typeof ManagerSelectSheetContainer>;

export const Default: Story = {
  render: () => <BottomSheetWithManager />,
};
