import AccountInfo from '@/components/my/AccountInfo/AccountInfo';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/my/AccountInfo/AccountInfo',
  component: AccountInfo,
  tags: ['autodocs'],
  argTypes: {
    nickname: {
      description: '닉네임',
      control: 'text',
    },
    account: {
      description: '이메일',
      control: 'text',
    },
  },
} satisfies Meta<typeof AccountInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    nickname: '스페이스엔젤',
    account: 'example@example.com',
  },
};
