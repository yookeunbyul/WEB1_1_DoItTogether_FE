import type { Meta, StoryObj } from '@storybook/react';
import DueDateSheetContainer from '@/components/bottomSheet/DueDateSheetContainer/DueDateSheetContainer';

const meta = {
  title: 'components/bottomSheet/DueDateSheetContainer',
  component: DueDateSheetContainer,
  tags: ['autodocs'],
} satisfies Meta<typeof DueDateSheetContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
