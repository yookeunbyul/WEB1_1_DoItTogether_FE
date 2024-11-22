import { Button } from '@/components/ui/button';

interface HouseWorkSelectedBtnProps {
  /**선택된 집안일 */
  houseWork: string;
}
const HouseWorkSelectedBtn: React.FC<HouseWorkSelectedBtnProps> = ({ houseWork }) => {
  return (
    <div className='flex items-center gap-x-11'>
      <div className='w-auto whitespace-nowrap'>집안일</div>
      <Button variant='houseWorkSelect' size='full' className='text-gray02'>
        {houseWork}
      </Button>
    </div>
  );
};

export default HouseWorkSelectedBtn;
