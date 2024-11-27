// InputBox.stories.tsx
import InputBox from '@/components/common/input/InputBox';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/common/input/InputBox',
  component: InputBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    handleChange: { action: 'changed' },
  },
} satisfies Meta<typeof InputBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '기본 텍스트',
    placeholder: '뭐든 입력',
    disabled: false,
    handleChange: undefined,
  },
};

export const EmptyText: Story = {
  args: {
    value: '',
    placeholder: '뭐든 입력',
    disabled: false,
    handleChange: undefined,
  },
};

export const Disabled: Story = {
  args: {
    value: '비활성화된 텍스트',
    placeholder: '입력 불가',
    disabled: true,
    handleChange: undefined,
  },
};

export const WithHandler: Story = {
  args: {
    value: '',
    placeholder: '입력해보세요',
    disabled: false,
    handleChange: value => console.log('Input changed:', value),
  },
};
