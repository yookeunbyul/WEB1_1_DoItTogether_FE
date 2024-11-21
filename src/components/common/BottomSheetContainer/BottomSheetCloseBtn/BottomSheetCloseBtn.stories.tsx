import type { Meta, StoryObj } from '@storybook/react';
import BottomSheetCloseBtn from './BottomSheetCloseBtn';
import { fn } from '@storybook/test';

const meta = {
  title: 'components/BottomSheetContainer/BottomSheetCloseBtn',
  component: BottomSheetCloseBtn,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className='[&>*]:!static [&>*]:!right-0 [&>*]:!top-0 [&>*]:!translate-x-0'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BottomSheetCloseBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    handleClick: fn(() => {
      console.log('Action triggered');
    }),
  },
};
