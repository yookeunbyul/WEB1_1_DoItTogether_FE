import type { Meta, StoryObj } from '@storybook/react';
import InviteLink from './InviteLink/InviteLink';

const meta: Meta<typeof InviteLink> = {
  title: 'Components/InviteLinkContainer/InviteLink',
  component: InviteLink,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InviteLink>;

export const NoValidCode: Story = {};

export const WithGeneratedLink: Story = {
  parameters: {
    docs: {
      description: {
        story: '링크가 생성된 후의 상태입니다. "발급받기" 버튼을 클릭하면 이 상태로 변경됩니다.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const generateButton = canvasElement.querySelector('button');
    if (generateButton) {
      generateButton.click();
    }
  },
};
