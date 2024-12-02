import React from 'react';
import { Button } from '@/components/common/ui/button';

interface MenuSelectProps {
  type: 'large';
  status: 'active' | 'inActive';
  content: string;
  handleSelect: (content: string) => void;
}

const MenuSelect: React.FC<MenuSelectProps> = ({ type, status, content, handleSelect }) => {
  return (
    <Button
      className={`max-w rounded-full ${type === 'large' && 'justify-start'} ${status === 'active' && 'bg-black01 text-white03'} px-5 py-3`}
      size={type}
      variant={'select'}
      onClick={() => handleSelect(content)}
    >
      {content}
    </Button>
  );
};

export default MenuSelect;
