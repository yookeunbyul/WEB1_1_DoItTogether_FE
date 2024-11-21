import type { Meta, StoryObj } from '@storybook/react';
import MemberTabContainer from './MemberTabContainer';

const meta = {
  title: 'Components/MemberTabContainer/MemberTabContainer',
  component: MemberTabContainer,
} satisfies Meta<typeof MemberTabContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
