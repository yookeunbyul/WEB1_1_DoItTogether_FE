import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/common/ui/dropdown-menu';

export interface ControlDropdownProps {
  id: number;
  /** 수정 클릭 이벤트 */
  handleEdit: () => void;
  /** 삭제 클릭 이벤트 */
  handleDelete: (id: number) => void;
}

const ControlDropdown = ({ id, handleEdit, handleDelete }: ControlDropdownProps) => {
  return (
    <DropdownMenu>
      {/* TODO Trigger 수정 필요 */}
      <DropdownMenuTrigger>선택</DropdownMenuTrigger>
      <DropdownMenuContent className='flex -translate-x-10 flex-col rounded-2xl'>
        <DropdownMenuItem
          className='flex items-center justify-between px-5 py-2 text-14'
          onSelect={handleEdit}
        >
          <span className='border-gray-300 border px-2 py-2'>{/* 아이콘 자리 */}</span>
          수정
        </DropdownMenuItem>
        <DropdownMenuItem
          className='flex items-center justify-between px-5 py-2 text-14'
          onSelect={() => handleDelete(id)}
        >
          <span className='border-gray-300 border px-2 py-2'>{/* 아이콘 자리 */}</span>
          삭제
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ControlDropdown;
