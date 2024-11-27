import PresetCategory from '@/components/setting/presetSetting/PresetCategory';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PresetCategory> = {
  title: 'components/setting/presetSetting/PresetCategory',
  component: PresetCategory,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PresetCategory>;

export const Default: Story = {
  args: {},
};
