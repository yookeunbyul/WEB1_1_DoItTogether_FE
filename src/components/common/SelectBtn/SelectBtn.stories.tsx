import type { Meta, StoryObj } from '@storybook/react';
import SelectBtn from '@/components/common/SelectBtn/SelectBtn';
import BottomSheetContainer from '@/components/common/BottomSheetContainer/BottomSheetContainer';
import { useState } from 'react';
import Button from '@/components/common/ButtonContainer/Button/Button';
import MaganerSelectContainer from '@/components/ManagerSelectContainer/ManagerSelectContainer';

const meta = {
  title: 'components/common/SelectBtn',
  component: SelectBtn,
  tags: ['autodocs'],
  argTypes: {
    text: {
      description: '셀렉트버튼 제목',
      control: 'text',
    },
  },
} satisfies Meta<typeof SelectBtn>;

export default meta;

const SelectBtnWithBottomSheet = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <SelectBtn text='셀렉트버튼 제목' handleClick={() => setOpen(true)} />
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
