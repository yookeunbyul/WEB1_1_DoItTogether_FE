// PresetTabContainer.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import PresetTabContainer from './PresetTabContainer';

const meta: Meta<typeof PresetTabContainer> = {
  title: 'Components/PresetTabContainer',
  component: PresetTabContainer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PresetTabContainer>;

export const Default: Story = {
  render: () => <PresetTabContainer />,
};

// 다른 상태나 변형을 보여주고 싶다면 추가 스토리를 작성할 수 있습니다
export const WithContent: Story = {
  render: () => (
    <div className='max-w-2xl w-full'>
      <PresetTabContainer />
    </div>
  ),
};

export const MultiplePresets: Story = {
  render: () => (
    <div className='space-y-4'>
      <PresetTabContainer />
      <PresetTabContainer />
    </div>
  ),
};
