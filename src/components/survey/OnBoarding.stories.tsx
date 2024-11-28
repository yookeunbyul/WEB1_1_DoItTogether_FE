import type { Meta, StoryObj } from '@storybook/react';
import OnBoarding from '@/components/survey/OnBoarding';
import { BrowserRouter as Router } from 'react-router-dom';

const meta = {
  title: 'components/survey/OnBoarding',
  component: OnBoarding,
  tags: ['autodocs'],
} satisfies Meta<typeof OnBoarding>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: args => (
    <Router>
      <OnBoarding {...args} />
    </Router>
  ),
};
