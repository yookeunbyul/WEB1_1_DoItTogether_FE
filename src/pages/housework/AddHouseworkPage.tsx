import MetaTags from '@/components/common/metaTags/MetaTags';
import { HeaderWithTitle, Step1, Step2, HouseWorkAddLoading } from '@/components/housework';
import Button from '@/components/common/button/Button/Button';
import useAddHouseWork from '@/hooks/useAddHouseWork';

const AddHouseworkPage = ({}) => {
  const {
    startDate,
    userId,
    task,
    setTask,
    isLoading,
    channelId,
    houseworkId,
    handleBackClick,
    handleNextClick,
    step,
    time,
    setTime,
    members,
    category,
    setCategory,
    setStartDate,
  } = useAddHouseWork();

  console.log(task, category);

  return (
    <div className='flex h-screen flex-col gap-4 px-5 pb-6'>
      {houseworkId ? (
        <MetaTags
          title={'두잇투게더 - 집안일 수정'}
          description={'등록한 집안일을 수정해보세요.'}
          url={`https://doit-together.vercel.app/add-housework/${channelId}/${houseworkId}`}
        />
      ) : (
        <MetaTags
          title={'두잇투게더 - 집안일 등록'}
          description={'간편하게 집안일을 등록해보세요.'}
          url={`https://doit-together.vercel.app/add-housework/${channelId}`}
        />
      )}
      {!isLoading && (
        <HeaderWithTitle
          title={step === 1 ? `새로운 집안일을\n추가해보세요` : `담당자를\n지정해보세요`}
          handleClick={handleBackClick}
        />
      )}

      {/* 집안일,날짜,시간 */}
      {step === 1 && (
        <Step1
          setTime={setTime}
          time={time}
          task={task}
          setTask={setTask}
          setCategory={setCategory}
          startDate={startDate}
          setStartDate={setStartDate}
        />
      )}

      {/* 담당자 */}
      {step === 2 &&
        (isLoading ? (
          <HouseWorkAddLoading
            member={userId}
            housework={task}
            date={startDate}
            members={members}
            category={category}
          />
        ) : (
          <Step2 />
        ))}

      {!isLoading && (
        <Button
          variant='full'
          size='large'
          label={step === 1 ? '다음' : '완료'}
          handleClick={handleNextClick}
          disabled={step === 1 ? !task || !startDate : !userId}
          className='sticky bottom-6'
        />
      )}
    </div>
  );
};

export default AddHouseworkPage;
