import type { Meta, StoryObj } from '@storybook/react';
import HouseworkCategoryTag, {
  HouseworkCategoryTagProps,
} from '@/components/common/HouseworkCatetoryTag/HouseworkCategoryTag';

const meta = {
  title: 'components/common/HouseworkCategoryTag',
  component: HouseworkCategoryTag,
  tags: ['autodocs'],
} satisfies Meta<typeof HouseworkCategoryTag>;

export default meta;

type Story = StoryObj<HouseworkCategoryTagProps>;

export const Default: Story = {
  args: {
    category: '거실',
  },
};
