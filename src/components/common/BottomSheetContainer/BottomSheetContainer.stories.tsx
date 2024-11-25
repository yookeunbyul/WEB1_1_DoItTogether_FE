import type { Meta, StoryObj } from '@storybook/react';
import BottomSheetContainer from './BottomSheetContainer';
import { useState } from 'react';

const meta = {
  title: 'components/common/BottomSheetContainer',
  component: BottomSheetContainer,
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
} satisfies Meta<typeof BottomSheetContainer>;

export default meta;

const BottomSheetWithState = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Bottom Sheet</button>
      <BottomSheetContainer isOpen={isOpen} setOpen={setOpen} title='바텀시트 제목'>
        <div className='p-4'>
          <p>바텀시트 컨텐츠입니다</p>
        </div>
      </BottomSheetContainer>
    </>
  );
};

type Story = StoryObj<typeof BottomSheetContainer>;

export const Default: Story = {
  render: () => <BottomSheetWithState />,
};
