import SurveyIntroDesc from '@/components/survey/surveyIntro/SurveyIntroDesc';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SurveyIntroDesc> = {
  title: 'components/survey/surveyIntro/SurveyIntroDesc',
  component: SurveyIntroDesc,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SurveyIntroDesc>;

export const Default: Story = {
  args: {
    title: `당신만의 청소 스타일을\n완성해보세요`,
  },
};
