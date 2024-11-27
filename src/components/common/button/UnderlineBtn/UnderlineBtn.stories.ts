import { action } from '@storybook/addon-actions';
import UnderlineBtn from '@/components/common/button/UnderlineBtn/UnderlineBtn';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/common/button/UnderlineBtn/UnderlineBtn',
  component: UnderlineBtn,
  tags: ['autodocs'],
  argTypes: {
    text: {
      description: '버튼 내용',
      control: 'text',
    },
    handleClick: {
      description: '버튼 누르면 생기는 이벤트',
    },
  },
} satisfies Meta<typeof UnderlineBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: '버튼 내용',
    handleClick: action('i clicked'),
  },
};
