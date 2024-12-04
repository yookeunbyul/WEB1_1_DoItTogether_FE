import type { Meta, StoryObj } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import Button from './Button';

const meta = {
  title: 'components/common/button/Button/Button',
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
export const Disabled: Story = {
  args: {
    label: 'Outline 버튼',
    variant: 'disabled',
    size: 'large',
  },
};
export const Secondary: Story = {
  args: {
    label: 'Secondary 버튼',
    variant: 'secondary',
    size: 'large',
  },
};
export const Onboarding: Story = {
  args: {
    label: 'Ghost 버튼',
    variant: 'onboarding',
    size: 'small',
  },
};
export const Kakao: Story = {
  args: {
    label: 'kakao 버튼',
    variant: 'kakao',
    size: 'small',
  },
};
