import type { Meta, StoryObj } from '@storybook/react';
import HomeHeaderContainer from './HomeHeaderContainer';

const meta = {
  title: 'components/HomeHeaderContainer',
  component: HomeHeaderContainer,
} satisfies Meta<typeof HomeHeaderContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
