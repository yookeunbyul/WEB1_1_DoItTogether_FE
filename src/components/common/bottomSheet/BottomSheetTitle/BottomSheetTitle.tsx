import { Badge } from '@/components/common/ui/badge';
import React from 'react';

interface BottomSheetTitleProps {
  tag?: string;
  title: string;
}

const BottomSheetTitle: React.FC<BottomSheetTitleProps> = ({
  tag,
  title,
}: BottomSheetTitleProps) => {
  return (
    <div className='flex items-center justify-center gap-2 border-0 border-b border-solid border-gray03 py-5 text-center'>
      {tag && <Badge className=''>{tag}</Badge>}
      {title}
    </div>
  );
};

export default BottomSheetTitle;
