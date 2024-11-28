import LoadingScreen from '@/components/survey/LoadingScreen/LoadingScreen';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LoadingScreen> = {
  title: 'components/survey/LoadingScreen',
  component: LoadingScreen,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoadingScreen>;

export const Default: Story = {
  args: {
    username: `사용자`,
    isCompleted: false,
  },
};
