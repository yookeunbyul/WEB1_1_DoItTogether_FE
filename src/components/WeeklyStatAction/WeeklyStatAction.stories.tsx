import type { Meta, StoryObj } from '@storybook/react';
import WeeklyStatAction from '@/components/WeeklyStatAction/WeeklyStatAction';

const meta = {
  title: 'components/WeeklyStatAction',
  component: WeeklyStatAction,
  tags: ['autodocs'],
} satisfies Meta<typeof WeeklyStatAction>;

export default meta;

type Story = StoryObj<typeof meta>;

// 부모 컴포넌트 정의
const ParentWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className='flex gap-2'>{children}</div>
);

export const Default: Story = {
  args: {
    type: 'compliment',
    num: 2,
  },
  render: args => <WeeklyStatAction {...args} />,
};

export const Tease: Story = {
  args: {
    type: 'tease',
    num: 3,
  },
  render: args => <WeeklyStatAction {...args} />,
};

export const Flex: Story = {
  args: {
    type: 'compliment',
    num: 3,
  },

  render: args => (
    <ParentWrapper>
      <WeeklyStatAction {...args} />
      <WeeklyStatAction {...args} />
    </ParentWrapper>
  ),
};
