import React from 'react';
import HouseworkListItem from '@/components/home/HouseworkList/HouseworkListItem/HouseworkListItem';

export interface HouseworkListProps {
  items: {
    id: number;
    actionStatus: string;
    listTitle: string;
    charger: string;
    time: string;
    category: string;
  }[];
  handleAction: (id: number) => void;
  handleEdit: () => void;
  handleDelete: (id: number) => void;
}

const HouseworkList: React.FC<HouseworkListProps> = ({
  items,
  handleAction,
  handleEdit,
  handleDelete,
}) => {
  return (
    <div className='flex max-w flex-col gap-2 p-5'>
      {items.map(item => (
        <HouseworkListItem
          key={item.id}
          {...item}
          handleAction={handleAction}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default HouseworkList;
