import type { Meta, StoryObj } from '@storybook/react';
import OpenSheetBtn from '@/components/housework/OpenSheetBtn/OpenSheetBtn';
import BottomSheet from '@/components/common/bottomSheet/BottomSheet';
import { useState } from 'react';

const meta = {
  title: 'components/housework/OpenSheetBtn/OpenSheetBtn',
  component: OpenSheetBtn,
  tags: ['autodocs'],
  argTypes: {
    text: {
      description: '셀렉트버튼 제목',
      control: 'text',
    },
  },
} satisfies Meta<typeof OpenSheetBtn>;

export default meta;

const SelectBtnWithBottomSheet = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <OpenSheetBtn text='셀렉트버튼 제목' handleClick={() => setOpen(true)} />
      <BottomSheet isOpen={isOpen} setOpen={setOpen} title='바텀시트 제목'>
        <div className='p-4'>
          <p>바텀시트 컨텐츠입니다</p>
        </div>
      </BottomSheet>
    </>
  );
};

type Story = StoryObj<typeof SelectBtnWithBottomSheet>;

export const Default: Story = {
  render: () => <SelectBtnWithBottomSheet />,
};
