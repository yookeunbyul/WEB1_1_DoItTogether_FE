import React from 'react';
import HouseworkListItem, {
  HouseworkListItemProps,
} from '@/components/home/HouseworkList/HouseworkListItem/HouseworkListItem';

export interface HouseworkListProps {
  items: HouseworkListItemProps[];
}

const HouseworkList: React.FC<HouseworkListProps> = ({ items }) => {
  return (
    <div className='flex max-w flex-col gap-2 p-5'>
      {items.map(item => (
        <HouseworkListItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default HouseworkList;
