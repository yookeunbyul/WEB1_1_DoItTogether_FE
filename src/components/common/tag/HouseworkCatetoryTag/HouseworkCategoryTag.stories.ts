import HouseworkCategoryTag, {
  HouseworkCategoryTagProps,
} from '@/components/common/tag/HouseworkCatetoryTag/HouseworkCategoryTag';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/common/tag/HouseworkCategoryTag',
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
