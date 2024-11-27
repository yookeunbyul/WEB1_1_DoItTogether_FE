import PresetItemControl from '@/components/setting/presetSetting/PresetItemControl/PresetItemControl';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PresetItemControl> = {
  title: 'components/setting/presetSetting/PresetItemControl/PresetItemControl',
  component: PresetItemControl,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PresetItemControl>;

export const Default: Story = {
  args: {},
};
