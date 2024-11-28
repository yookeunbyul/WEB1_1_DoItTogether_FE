import type { Meta, StoryObj } from '@storybook/react';
import { useState } from '@storybook/preview-api';
import { Calendar } from '@/components/housework/DueDateSheet/Calendar/Calendar';

const meta: Meta<typeof Calendar> = {
  title: 'components/housework/DueDateSheet/Calendar/Calendar',
  component: Calendar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  args: { mode: 'single' },
  render: function Render(args) {
    const [date, setDate] = useState<Date | undefined>(undefined);
    return (
      <Calendar
        {...args}
        mode='single'
        selected={date}
        onSelect={function (newDate) {
          setDate(newDate);
        }}
      />
    );
  },
};
