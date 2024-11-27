import TitleCenter from '@/components/common/title/TitleCenter';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TitleCenter> = {
  title: 'components/common/title/TitleCenter',
  component: TitleCenter,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TitleCenter>;

export const Default: Story = {
  args: {
    title: `사용하실 닉네임과\n프로필을 설정해주세요`,
  },
};
