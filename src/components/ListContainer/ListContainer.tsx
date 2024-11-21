import React from 'react';
import ListItemContainer, { ListItemContainerProps } from './ListItemContainer/ListItemContainer';

export interface ListContainerProps {
  items: ListItemContainerProps[];
}

const ListContainer: React.FC<ListContainerProps> = ({ items }) => {
  return (
    <div className='max-w'>
      {items.map(item => (
        <ListItemContainer key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ListContainer;
