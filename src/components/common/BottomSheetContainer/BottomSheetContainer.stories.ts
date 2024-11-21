import type { Meta, StoryObj } from '@storybook/react';
import BottomSheetContainer from './BottomSheetContainer';

const meta = {
  title: 'components/BottomSheetContainer',
  component: BottomSheetContainer,
} satisfies Meta<typeof BottomSheetContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
