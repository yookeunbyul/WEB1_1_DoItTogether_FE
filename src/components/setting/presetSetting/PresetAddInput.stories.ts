import PresetAddInput from '@/components/setting/presetSetting/PresetAddInput';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PresetAddInput> = {
  title: 'components/setting/presetSetting/PresetAddInput',
  component: PresetAddInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PresetAddInput>;

export const Default: Story = {
  args: {},
};
