import PresetItemContainer from '@/components/PresetItemContainer/PresetItemContainer';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PresetItemContainer> = {
  title: 'Components/PresetItemContainer',
  component: PresetItemContainer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PresetItemContainer>;

export const Default: Story = {
  args: {},
};
