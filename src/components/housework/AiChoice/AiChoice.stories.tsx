import type { Meta, StoryObj } from '@storybook/react';
import AiChoice from '@/components/housework/AiChoice/AiChoice';

const meta = {
  title: 'components/housework/AiChoice/AiChoice',
  component: AiChoice,
  tags: ['autodocs'],
} satisfies Meta<typeof AiChoice>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isLoading: false,
    tags: ['규칙적으로 청소', '나 자신을 위해', '청소 각오는 만땅!', '화장실 청소 좋아!'],
  },
  render: args => <AiChoice {...args} />,
};

export const Loading: Story = {
  args: {
    isLoading: true,
    tags: ['규칙적으로 청소', '나 자신을 위해', '청소 각오는 만땅!', '화장실 청소 좋아!'],
  },
  render: args => <AiChoice {...args} />,
};
