import GroupSelectSheetContainer from '@/components/bottomSheet/GroupSelectSheetContainer/GroupSelectSheetContainer';
import BottomSheetContainer from '@/components/common/BottomSheetContainer/BottomSheetContainer';
import GroupOptionContainer from '@/components/GroupOptionContainer/GroupOptionContainer';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta = {
  title: 'components/common/bottomSheet/GroupSelectSheetContainer',
  component: GroupSelectSheetContainer,
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
} satisfies Meta<typeof GroupSelectSheetContainer>;

export default meta;

const BottomSheetWithGroupOption = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Bottom Sheet</button>
      <BottomSheetContainer isOpen={isOpen} setOpen={setOpen} title='바텀시트 제목'>
        <GroupOptionContainer />
      </BottomSheetContainer>
    </>
  );
};

type Story = StoryObj<typeof GroupSelectSheetContainer>;

export const Default: Story = {
  render: () => <BottomSheetWithGroupOption />,
};
