import type { Meta, StoryObj } from '@storybook/react';
import BottomSheet from '@/components/common/bottomSheet/BottomSheet';
import { useState } from 'react';

const meta = {
  title: 'components/common/bottomSheet/BottomSheet',
  component: BottomSheet,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: '바텀시트 제목',
      control: 'text',
    },
    isOpen: {
      description: '바텀시트 오픈 여부',
      control: 'boolean',
    },
    children: {
      description: '바텀시트 내부 컨텐츠',
    },
  },
} satisfies Meta<typeof BottomSheet>;

export default meta;

const BottomSheetWithState = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Bottom Sheet</button>
      <BottomSheet isOpen={isOpen} setOpen={setOpen} title='바텀시트 제목'>
        <div className='p-4'>
          <p>바텀시트 컨텐츠입니다</p>
        </div>
      </BottomSheet>
    </>
  );
};

type Story = StoryObj<typeof BottomSheet>;

export const Default: Story = {
  render: () => <BottomSheetWithState />,
};
