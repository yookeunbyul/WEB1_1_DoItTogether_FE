import { Button } from '@/components/ui/button';

const HouseWorkSelectBtn = () => {
  return (
    <Button variant='houseWorkSelect' size='full' className='!justify-between'>
      <div>어떤 집안일인가요?</div>
      <div className='h-4 w-4 rounded-full bg-gray02'></div>
    </Button>
  );
};

export default HouseWorkSelectBtn;
