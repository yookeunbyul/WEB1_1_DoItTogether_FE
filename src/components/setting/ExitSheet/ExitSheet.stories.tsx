import type { Meta, StoryObj } from '@storybook/react';
import ExitSheet from './ExitSheet';

const meta: Meta<typeof ExitSheet> = {
  title: 'components/setting/ExitSheet/ExitSheet',
  component: ExitSheet,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    tag: {
      control: 'text',
      description: 'sheet Title tag',
    },
    sheetTitle: {
      control: 'text',
      description: 'sheet Title',
    },
    btnText: {
      control: 'text',
      description: '버튼 text',
    },
    isOpen: {
      control: 'boolean',
      description: '바텀시트 오픈 여부',
    },
    setOpen: {
      description: 'isOpen 바꾸는 set함수',
    },
    handleExit: {
      description: '보내 나가',
    },
    handleClose: {
      description: '안 보낼래',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ExitSheet>;

export const Default: Story = {
  args: {
    tag: '태그',
    sheetTitle: '시트 제목',
    btnText: '확인',
    isOpen: true,
    setOpen: (isOpen: boolean) => console.log('setOpen', isOpen),
    handleExit: () => console.log('보내 나가'),
    handleClose: () => console.log('안 보낼래'),
  },
};

export const WithoutTag: Story = {
  args: {
    sheetTitle: '시트 제목',
    btnText: '확인',
    isOpen: true,
    setOpen: (isOpen: boolean) => console.log('setOpen', isOpen),
    handleExit: () => console.log('보내 나가'),
    handleClose: () => console.log('안 보낼래'),
  },
};

export const Closed: Story = {
  args: {
    tag: '태그',
    sheetTitle: '시트 제목',
    btnText: '확인',
    isOpen: false,
    setOpen: (isOpen: boolean) => console.log('setOpen', isOpen),
    handleExit: () => console.log('보내 나가'),
    handleClose: () => console.log('안 보낼래'),
  },
};
