import type { Meta, StoryObj } from '@storybook/react';
import CloseBtn from './CloseBtn';
import { fn } from '@storybook/test';

const meta = {
  title: 'ccomponents/common/bottomSheet/CloseBtn',
  component: CloseBtn,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className='[&>*]:!static [&>*]:!right-0 [&>*]:!top-0 [&>*]:!translate-x-0'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CloseBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    handleClick: fn(() => {
      console.log('Action triggered');
    }),
  },
};
