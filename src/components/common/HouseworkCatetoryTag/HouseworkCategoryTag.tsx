import React from 'react';
import { Badge } from '@/components/ui/badge';

export interface HouseworkCategoryTagProps {
  /** 집안일 카테고리 */
  category: string;
}

const HouseworkCategoryTag: React.FC<HouseworkCategoryTagProps> = ({ category }) => {
  return (
    <div>
      <Badge variant={'secondary'} className='px-1 text-12'>
        {category}
      </Badge>
    </div>
  );
};

export default HouseworkCategoryTag;
