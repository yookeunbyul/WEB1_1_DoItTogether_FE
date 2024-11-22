import type { Meta, StoryObj } from '@storybook/react';
import HouseWorkSelectBtn from '@/components/HouseWorkSelectBtn/HouseWorkSelectBtn';

const meta = {
  title: 'components/HouseWorkSelectBtn',
  component: HouseWorkSelectBtn,
  tags: ['autodocs'],
} satisfies Meta<typeof HouseWorkSelectBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
