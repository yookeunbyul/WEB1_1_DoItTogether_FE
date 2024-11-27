import GroupSelectSheet from '@/components/home/GroupSelectSheet/GroupSelectSheet';
import BottomSheet from '@/components/common/bottomSheet/BottomSheet';
import GroupOptions from '@/components/home/GroupSelectSheet/GroupOptions/GroupOptions';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta = {
  title: 'components/home/GroupSelectSheet',
  component: GroupSelectSheet,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      description: '시트 오픈 여부',
      control: 'boolean',
    },
    handleSetOpen: {
      description: '바텀시트 열고 닫는 함수',
    },
  },
} satisfies Meta<typeof GroupSelectSheet>;

export default meta;

const BottomSheetWithGroupOption = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Bottom Sheet</button>
      <BottomSheet isOpen={isOpen} setOpen={setOpen} title='바텀시트 제목'>
        <GroupOptions />
      </BottomSheet>
    </>
  );
};

type Story = StoryObj<typeof GroupSelectSheet>;

export const Default: Story = {
  render: () => <BottomSheetWithGroupOption />,
};
