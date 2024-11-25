import React from 'react';
import ListItemContainer, { ListItemContainerProps } from './ListItemContainer/ListItemContainer';

export interface ListContainerProps {
  items: ListItemContainerProps[];
}

const ListContainer: React.FC<ListContainerProps> = ({ items }) => {
  return (
    <div className='flex max-w flex-col gap-2 p-5'>
      {items.map(item => (
        <ListItemContainer key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ListContainer;
