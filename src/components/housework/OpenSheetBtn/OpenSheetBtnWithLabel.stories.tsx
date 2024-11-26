import { action } from '@storybook/addon-actions';
import SelectedBtn from '@/components/common/SelectedBtn/SelectedBtn';
import type { Meta, StoryObj } from '@storybook/react';
import BottomSheetContainer from '@/components/common/BottomSheetContainer/BottomSheetContainer';
import { useState } from 'react';

const meta = {
  title: 'components/common/SelectedBtn',
  component: SelectedBtn,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: '타이틀',
      control: 'text',
    },
    selected: {
      description: '셀렉된 값',
      control: 'text',
    },
  },
} satisfies Meta<typeof SelectedBtn>;

export default meta;

const SelectBtnWithBottomSheet = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <SelectedBtn title='타이틀' selected='셀렉된 값' handleClick={() => setOpen(true)} />
      <BottomSheetContainer isOpen={isOpen} setOpen={setOpen} title='바텀시트 제목'>
        <div className='p-4'>
          <p>바텀시트 컨텐츠입니다</p>
        </div>
      </BottomSheetContainer>
    </>
  );
};

type Story = StoryObj<typeof SelectBtnWithBottomSheet>;

export const Default: Story = {
  render: () => <SelectBtnWithBottomSheet />,
};
