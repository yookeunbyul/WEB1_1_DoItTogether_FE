import type { Meta, StoryObj } from '@storybook/react';
import MenuSelect from '@/components/survey/MenuSelect/MenuSelect';

const meta = {
  title: 'components/survey/MenuSelect',
  component: MenuSelect,
  tags: ['autodocs'],
} satisfies Meta<typeof MenuSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { type: 'full', status: 'active', content: '주에 2, 3회' },
  render: args => <MenuSelect {...args} />,
};

export const Tight: Story = {
  args: { type: 'tight', status: 'inActive', content: '정리정돈의 욕구' },
  render: args => <MenuSelect {...args} />,
};
