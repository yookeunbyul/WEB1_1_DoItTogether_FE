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
      className={`max-w ${type === 'large' && 'justify-start'} ${status === 'active' && 'bg-main text-white03'} whitespace-pre-line rounded-2xl text-left`}
      size={type}
      variant={'onboarding'}
      onClick={() => handleSelect(content)}
    >
      {content}
    </Button>
  );
};

export default MenuSelect;
