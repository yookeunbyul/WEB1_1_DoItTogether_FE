import type { Meta, StoryObj } from '@storybook/react';
import PageHeaderContainer, {
  PageHeaderContainerProps,
} from '@/components/PageHeaderContainer/PageHeaderContainer';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'components/PageHeaderContainer',
  component: PageHeaderContainer,
  tags: ['autodocs'],
} satisfies Meta<typeof PageHeaderContainer>;

export default meta;

type Story = StoryObj<PageHeaderContainerProps>;

export const Default: Story = {
  args: {
    title: '새로운 집안일을 추가해보세요(1/2)',
    handleClick: action('BackBtn Clicked!'),
  },
};
