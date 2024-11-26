import React from 'react';
import ListItemContainer, { ListItemContainerProps } from './ListItemContainer/ListItemContainer';

export interface HouseworkListProps {
  items: ListItemContainerProps[];
}

const HouseworkList: React.FC<HouseworkListProps> = ({ items }) => {
  return (
    <div className='flex max-w flex-col gap-2 p-5'>
      {items.map(item => (
        <ListItemContainer key={item.id} {...item} />
      ))}
    </div>
  );
};

export default HouseworkList;
