import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import HeaderWithTitle, {
  HeaderWithTitleProps,
} from '@/components/housework/HeaderWithTitle/HeaderWithTitle';

const meta = {
  title: 'components/housework/HeaderWithTitle/HeaderWithTitle',
  component: HeaderWithTitle,
  tags: ['autodocs'],
} satisfies Meta<typeof HeaderWithTitle>;

export default meta;

type Story = StoryObj<HeaderWithTitleProps>;

export const Default: Story = {
  args: {
    title: '새로운 집안일을 추가해보세요(1/2)',
    handleClick: action('BackBtn Clicked!'),
  },
};
