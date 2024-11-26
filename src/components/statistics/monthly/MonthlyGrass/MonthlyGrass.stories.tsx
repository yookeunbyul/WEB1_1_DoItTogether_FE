import type { Meta, StoryObj } from '@storybook/react';
import MonthlyGrass from './MonthlyGrass';

const meta = {
  title: 'Components/MonthlyStatisticsContainer/MonthlyGrass',
  component: MonthlyGrass,
  tags: ['autodocs'],
} satisfies Meta<typeof MonthlyGrass>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [Story => <Story />],
};
