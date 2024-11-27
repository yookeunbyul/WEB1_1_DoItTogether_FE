import PresetItem, { PresetItemProps } from '@/components/common/preset/PresetItem';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/common/preset/PresetItem',
  component: PresetItem,
  tags: ['autodocs'],
} satisfies Meta<typeof PresetItem>;

export default meta;

type Story = StoryObj<PresetItemProps>;

export const Default: Story = {
  args: {
    category: '거실',
    housework: '쓰레기통 비우기',
    handleSelectClick: () => console.log('preset item clicked!'),
    isInPresetSetting: false,
    handleSettingClick: () => console.log('preset item clicked!'),
    isShowDeleteBtn: false,
    handleDeleteClick: () => console.log('preset item clicked!'),
  },
};
