import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '@/components/common/Calendar/Calendar';
import { useState } from '@storybook/preview-api';

const meta: Meta<typeof Calendar> = {
  title: 'components/common/Calendar',
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
