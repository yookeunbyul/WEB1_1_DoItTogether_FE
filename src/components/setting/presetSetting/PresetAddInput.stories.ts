import PresetAddContainer from '@/components/PresetAddContainer/PresetAddContainer';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PresetAddContainer> = {
  title: 'Components/PresetAddContainer',
  component: PresetAddContainer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PresetAddContainer>;

export const Default: Story = {
  args: {},
};
