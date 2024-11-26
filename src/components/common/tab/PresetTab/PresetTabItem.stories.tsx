import type { Meta, StoryObj } from '@storybook/react';
import PresetTab from './PresetTabItem';
import { Tabs, TabsList, TabsContent } from '@/components/ui/tabs';

const meta: Meta<typeof PresetTab> = {
  title: 'Components/PresetTabContainer/PresetTab',
  component: PresetTab,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PresetTab>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue='living'>
      <TabsList>
        <PresetTab name='거실' value='living' icon='' />
      </TabsList>
      <TabsContent value='living'>선택</TabsContent>
    </Tabs>
  ),
};

export const CustomTab: Story = {
  render: () => (
    <Tabs defaultValue=''>
      <TabsList>
        <PresetTab name='주방' value='kitchen' icon='' />
      </TabsList>
      <TabsContent value='kitchen'>선택X</TabsContent>
    </Tabs>
  ),
};
