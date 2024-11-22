import type { Meta, StoryObj } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import Button from './Button';

const meta = {
  title: 'components/common/ButtonContainer/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '버튼',
    variant: 'full',
    size: 'small',
  },
};
export const Outline: Story = {
  args: {
    label: 'Outline 버튼',
    variant: 'outline',
    size: 'medium',
  },
};
export const Secondary: Story = {
  args: {
    label: 'Secondary 버튼',
    variant: 'secondary',
    size: 'large',
  },
};
export const Ghost: Story = {
  args: {
    label: 'Ghost 버튼',
    variant: 'ghost',
    size: 'medium',
  },
};
export const Link: Story = {
  args: {
    label: 'Link 버튼',
    variant: 'link',
    size: 'small',
  },
};
