import BottomSheet from '@/components/common/bottomSheet/BottomSheet';
import OpenSheetBtnWithLabel from '@/components/housework/OpenSheetBtn/OpenSheetBtnWithLabel';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta = {
  title: 'components/housework/OpenSheetBtn/OpenSheetBtnWithLabel',
  component: OpenSheetBtnWithLabel,
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
} satisfies Meta<typeof OpenSheetBtnWithLabel>;

export default meta;

const SelectBtnWithBottomSheet = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <OpenSheetBtnWithLabel
        title='타이틀'
        selected='셀렉된 값'
        handleClick={() => setOpen(true)}
      />
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
