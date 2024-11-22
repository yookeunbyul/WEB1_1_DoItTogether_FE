import type { Meta, StoryObj } from '@storybook/react';
import ButtonContainer from './ButtonContainer';

const meta = {
  title: 'components/common/ButtonContainer/ButtonContainer',
  component: ButtonContainer,
  tags: ['autodocs'],
  argTypes: {
    buttonLeft: {
      control: 'object',
      description: '왼쪽 버튼의 속성 설정',
    },
    buttonRight: {
      control: 'object',
      description: '오른쪽 버튼의 속성 설정',
    },
  },
} satisfies Meta<typeof ButtonContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttonLeft: {
      label: '설정',
      variant: 'outline',
      size: 'small',
    },
    buttonRight: {
      label: '선택 완료',
      variant: 'full',
      size: 'medium',
    },
  },
};
