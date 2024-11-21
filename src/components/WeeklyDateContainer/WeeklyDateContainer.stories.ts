import type { Meta, StoryObj } from '@storybook/react';
import WeeklyDateContainer from './WeeklyDateContainer';

const meta = {
  title: 'components/WeeklyDateContainer',
  component: WeeklyDateContainer,
  tags: ['autodocs'],
} satisfies Meta<typeof WeeklyDateContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
