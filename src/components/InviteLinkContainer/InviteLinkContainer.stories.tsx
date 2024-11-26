import type { Meta, StoryObj } from '@storybook/react';
import InviteLinkContainer from './InviteLinkContainer';

const meta: Meta<typeof InviteLinkContainer> = {
  title: 'Components/InviteLinkContainer',
  component: InviteLinkContainer,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InviteLinkContainer>;

export const Default: Story = {};
