import type { Meta, StoryObj } from '@storybook/react';
import EditDeleteBtn, { EditDeleteBtnProps } from './EditDeleteBtn';
import { fn } from '@storybook/test'; // Mock function을 가져오기

/**
 * ! 삭제
 */

const meta = {
  title: 'components/home/HouseworkList/EditDeleteBtn',
  component: EditDeleteBtn,
  tags: ['autodocs'],
} satisfies Meta<typeof EditDeleteBtn>;

export default meta;

type Story = StoryObj<EditDeleteBtnProps>;

export const Default: Story = {
  args: {
    handleEditOrDelete: fn(() => {
      console.log('Edit or Delete triggered');
    }),
  },
};
