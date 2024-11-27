import React from 'react';
import { Button } from '@/components/common/ui/button';

interface MenuSelectProps {
  type: 'full' | 'tight';
  status: 'active' | 'inActive';
  content: string;
}

const MenuSelect: React.FC<MenuSelectProps> = ({ type, status, content }) => {
  return (
    <Button
      className={`max-w rounded-full ${type === 'full' && 'justify-start'} ${status === 'active' && 'bg-black01 text-white03'} px-5 py-3`}
      size={`${type === 'full' ? 'full' : 'tight'}`}
      variant={'select'}
    >
      {content}
    </Button>
  );
};

export default MenuSelect;
