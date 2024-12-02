import { useNavigate } from 'react-router-dom';
import AddHouseWorkBtn from './AddHouseWorkBtn/AddHouseWorkBtn';
import BottomNavBtn from './BottomNavBtn/BottomNavBtn';
import { useParams } from 'react-router-dom';
import { ChartIcon, GroupIcon, HomeIcon, ProfileIcon } from '@/components/common/icon';

const BottomNav = () => {
  const navigate = useNavigate();
  const { channelId } = useParams();

  const navItems = [
    { name: '홈', icon: <HomeIcon /> },
    { name: '통계', icon: <ChartIcon /> },
    { name: '그룹', icon: <GroupIcon /> },
    { name: '마이페이지', icon: <ProfileIcon /> },
  ];

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className='rounded-tr-4xl rounded-tl-4xl flex w-full max-w justify-between bg-white px-5 py-2 shadow-[0px_0px_7.2px_0px_rgba(217,250,245,1.0)]'>
      <BottomNavBtn
        icon={navItems[0].icon}
        name={navItems[0].name}
        handleClick={() => handleClick(`/main/${channelId}`)}
      />
      <BottomNavBtn
        icon={navItems[1].icon}
        name={navItems[1].name}
        handleClick={() => handleClick(`/main/${channelId}/statistics/weekly`)}
      />
      <AddHouseWorkBtn handleClick={() => handleClick(`/add-housework/${channelId}/step1`)} />
      <BottomNavBtn
        icon={navItems[2].icon}
        name={navItems[2].name}
        handleClick={() => handleClick(`/main/${channelId}/group-setting`)}
      />
      <BottomNavBtn
        icon={navItems[3].icon}
        name={navItems[3].name}
        handleClick={() => handleClick(`/main/${channelId}/my-page`)}
      />
    </div>
  );
};

export default BottomNav;
