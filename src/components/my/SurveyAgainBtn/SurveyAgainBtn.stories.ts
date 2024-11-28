import SurveyAgainBtn from '@/components/my/SurveyAgainBtn/SurveyAgainBtn';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/my/SurveyAgainBtn/SurveyAgainBtn',
  component: SurveyAgainBtn,
  tags: ['autodocs'],
} satisfies Meta<typeof SurveyAgainBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
