import type { Meta, StoryObj } from '@storybook/react';
import AccountMenuItem from './AccountMenuItem';

const meta: Meta<typeof AccountMenuItem> = {
  title: 'components/my/AccountMenuItem/AccountMenuItem',
  component: AccountMenuItem,
  argTypes: {
    label: {
      control: 'text',
      description: '메뉴 아이템 레이블',
    },
    state: {
      control: 'text',
      description: '상태 텍스트 (선택사항)',
    },
    iconType: {
      control: 'text',
      description: '아이콘 타입 (선택사항)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AccountMenuItem>;

export const Default: Story = {
  args: {
    label: '메뉴 아이템',
  },
};

export const WithState: Story = {
  args: {
    label: '메뉴 아이템',
    state: '활성화',
  },
};

export const WithIcon: Story = {
  args: {
    label: '메뉴 아이템',
    iconType: '.',
  },
};
