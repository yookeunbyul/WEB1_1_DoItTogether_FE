import SurveyTitle from '@/components/survey/SurveyTitle/SurveyTitle';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SurveyTitle> = {
  title: 'components/survey/SurveyTitle',
  component: SurveyTitle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SurveyTitle>;

export const Default: Story = {
  args: {
    title: `당신만의 청소 스타일을\n완성해보세요`,
  },
};
