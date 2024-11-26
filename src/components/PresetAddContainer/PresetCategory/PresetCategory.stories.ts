import PresetCategory from '@/components/PresetAddContainer/PresetCategory/PresetCategory';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PresetCategory> = {
  title: 'Components/PresetAddContainer/PresetCategory',
  component: PresetCategory,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PresetCategory>;

export const Default: Story = {
  args: {},
};
