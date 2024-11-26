import type { Meta, StoryObj } from '@storybook/react';
import InputContainer from './InputContainer/InputContainer';

const meta: Meta<typeof InputContainer> = {
  title: 'Components/common/InputContainer',
  component: InputContainer,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof InputContainer>;

export const Default: Story = {
  args: {
    label: '기본 라벨',
    value: '꼼시의 집',
    placeholder: '입력',
    disabled: false,
  },
};

export const NoText: Story = {
  args: {
    label: '기본 라벨',
    placeholder: 'placeholder',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: '비활성화된 입력',
    value: '비활성화된 텍스트',
    placeholder: '입력 불가',
    disabled: true,
  },
};
