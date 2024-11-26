import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import GroupSelectBtn from './GroupSelectBtn';

const meta = {
  title: 'components/HomeHeaderContainer/GroupSelectBtn',
  component: GroupSelectBtn,
  tags: ['autodocs'],
  argTypes: {
    groupName: {
      description: '그룹 이름',
      control: 'text',
    },
    handleSetOpen: {
      description: '바텀시트 열기 위한 set 함수',
    },
  },
} satisfies Meta<typeof GroupSelectBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    groupName: '우리집',
    handleSetOpen: action('i clicked'),
  },
};
