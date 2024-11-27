import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsContent, TabsList } from '@/components/common/ui/tabs';
import PresetTabItem from '@/components/common/tab/PresetTab/PresetTabItem';

const meta: Meta<typeof PresetTabItem> = {
  title: 'components/common/tab/PresetTab',
  component: PresetTabItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PresetTabItem>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue='living'>
      <TabsList>
        <PresetTabItem name='거실' value='living' icon='' />
      </TabsList>
      <TabsContent value='living'>선택</TabsContent>
    </Tabs>
  ),
};

export const CustomTab: Story = {
  render: () => (
    <Tabs defaultValue=''>
      <TabsList>
        <PresetTabItem name='주방' value='kitchen' icon='' />
      </TabsList>
      <TabsContent value='kitchen'>선택X</TabsContent>
    </Tabs>
  ),
};
