import React from 'react';
import HouseworkListItem from '@/components/home/HouseworkList/HouseworkListItem/HouseworkListItem';
import { Housework } from '@/types/apis/houseworkApi';

export interface HouseworkListProps {
  items: Housework[];
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
          key={item.houseworkId}
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
