import type { Meta, StoryObj } from '@storybook/react';
import InputBox from './InputBox';

const meta: Meta<typeof InputBox> = {
  title: 'Components/common/InputContainer/InputBox',
  component: InputBox,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof InputBox>;

export const Default: Story = {
  args: {
    value: '기본 텍스트',
    placeholder: '뭐든 입력',
    disabled: false,
  },
};

export const EmptyText: Story = {
  args: {
    value: '',
    placeholder: '뭐든 입력',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    value: '비활성화된 텍스트',
    placeholder: '입력 불가',
    disabled: true,
  },
};
