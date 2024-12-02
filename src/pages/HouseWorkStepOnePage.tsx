import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/common/button/Button/Button';
import OpenSheetBtn from '@/components/common/button/OpenSheetBtn/OpenSheetBtn';
import OpenSheetBtnWithLabel from '@/components/common/button/OpenSheetBtn/OpenSheetBtnWithLabel';
import HeaderWithTitle from '@/components/housework/HeaderWithTitle/HeaderWithTitle';
import HouseWorkSheet from '@/components/housework/HouseWorkSheet/HouseWorkSheet';
import DueDateSheet from '@/components/housework/DueDateSheet/DueDateSheet';
import TimeControl from '@/components/housework/TimeControl/TimeControl';
import useAddHouseWorkStore from '@/store/useAddHouseWorkStore';
import { useParams } from 'react-router-dom';
import { getHouseworkById } from '@/services/housework/getHouseworkById';

export interface SelectedTime {
  hour: string;
  minute: string;
  ampm: 'AM' | 'PM';
}

const HouseWorkStepOnePage = () => {
  const navigate = useNavigate();
  const { task, startDate, startTime, setStartTime, reset } = useAddHouseWorkStore();
  const [isHouseWorkSheetOpen, setHouseWorkSheetOpen] = useState(false);
  const [isDueDateSheetOpen, setDueDateSheetOpen] = useState(false);
  const [time, setTime] = useState<SelectedTime | null>(startTime);
  const { channelId: strChannelId, houseworkId: strHouseworkId } = useParams();

  const channelId = Number(strChannelId);
  const houseworkId = Number(strHouseworkId);

  useEffect(() => {
    if (channelId && houseworkId) {
      // todo
      // task, category, startDate, startTime을 미리 채워넣으면 됨
      const fetchHouseworkById = async () => {
        try {
          const response = await getHouseworkById({ channelId, houseworkId });
          console.log(response);
        } catch (error) {
          console.error('집안일 상세 정보 조회 실패:', error);
        }
      };

      fetchHouseworkById();
    }
  }, []);

  const handleBackClick = () => {
    navigate(`/main/${channelId}`);
    reset();
  };
  const handleHouseWorkClick = () => {
    setHouseWorkSheetOpen(true);
  };
  const handleDueDateClick = () => {
    setDueDateSheetOpen(true);
  };

  const handleNextClick = () => {
    setStartTime(time);

    if (houseworkId) navigate(`/add-housework/edit/${channelId}/${houseworkId}/step2`);
    else navigate(`/add-housework/${channelId}/step2`);
  };

  const handleTimeChange = (newTime: SelectedTime | null) => {
    setTime(newTime);
  };

  return (
    <div className='flex h-screen flex-col gap-6 px-5 pb-6'>
      <HeaderWithTitle title={`새로운 집안일을\n추가해보세요`} handleClick={handleBackClick} />
      <section className='flex flex-1 flex-col gap-6' aria-label='집안일 추가 컨텐츠'>
        {task ? (
          <OpenSheetBtnWithLabel
            title='집안일'
            selected={task}
            handleClick={handleHouseWorkClick}
          />
        ) : (
          <OpenSheetBtn
            text='어떤 집안일인가요?'
            handleClick={handleHouseWorkClick}
            type='housework'
          />
        )}
        {startDate ? (
          <OpenSheetBtnWithLabel
            title='날짜'
            selected={startDate}
            handleClick={handleDueDateClick}
          />
        ) : (
          <OpenSheetBtn
            text='언제 해야 하나요?'
            handleClick={handleDueDateClick}
            type='housework'
          />
        )}
        <TimeControl onTimeChange={handleTimeChange} />
      </section>
      <Button
        variant='full'
        size='large'
        label='다음'
        handleClick={handleNextClick}
        disabled={!task || !startDate}
      />

      <HouseWorkSheet isOpen={isHouseWorkSheetOpen} setOpen={setHouseWorkSheetOpen} />
      <DueDateSheet isOpen={isDueDateSheetOpen} setOpen={setDueDateSheetOpen} />
    </div>
  );
};

export default HouseWorkStepOnePage;
