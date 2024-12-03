import {
  BathRoomIcon,
  BedRoomIcon,
  EtcIcon,
  HomeIcon,
  KitchenIcon,
  LivingRoomIcon,
} from '@/components/common/icon';
import { TabsTrigger } from '@/components/common/ui/tabs';
import { Category } from '@/constants';

interface PresetTabItemProps {
  name: string;
  value: string;
}

const PresetTabItem: React.FC<PresetTabItemProps> = ({ name, value }) => {
  return (
    <TabsTrigger
      value={value}
      className='font-label data-[state=active]:bg-black data-[state=inactive]:bg-gray4 data-[state=active]:text-white data-[state=inactive]:text-black flex gap-2 rounded-xl px-2 py-2'
    >
      <div className='flex h-5 items-center justify-center'>
        {name === Category.ALL && <HomeIcon />}
        {name === Category.LIVING_ROOM && <LivingRoomIcon />}
        {name === Category.BATH_ROOM && <BathRoomIcon />}
        {name === Category.BED_ROOM && <BedRoomIcon />}
        {name === Category.KITCHEN && <KitchenIcon />}
        {name === Category.ETC && <EtcIcon />}
      </div>
      <span className='flex items-center'>{name}</span>
    </TabsTrigger>
  );
};

export default PresetTabItem;
