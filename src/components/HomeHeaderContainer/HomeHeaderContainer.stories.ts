import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import HomeHeaderContainer from './HomeHeaderContainer';

const meta = {
  title: 'components/HomeHeaderContainer',
  component: HomeHeaderContainer,
  tags: ['autodocs'],
  argTypes: {
    handleSetOpen: {
      description: '바텀시트 열기 위한 set 함수',
    },
  },
} satisfies Meta<typeof HomeHeaderContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    handleSetOpen: action('i clicked!'),
  },
};
