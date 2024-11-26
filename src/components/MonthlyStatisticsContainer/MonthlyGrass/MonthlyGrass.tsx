import { ResponsiveTimeRange } from '@nivo/calendar';

interface MonthlyGrassProps {}

const MonthlyGrass: React.FC<MonthlyGrassProps> = ({}) => {
  const data = [
    {
      value: 17,
      day: '2024-05-01',
    },
    {
      value: 28,
      day: '2024-05-02',
    },
    {
      value: 1,
      day: '2024-05-03',
    },
    {
      value: 2,
      day: '2024-05-04',
    },
    {
      value: 19,
      day: '2024-05-05',
    },
    {
      value: 26,
      day: '2024-05-06',
    },
    {
      value: 35,
      day: '2024-05-07',
    },
    {
      value: 23,
      day: '2024-05-08',
    },
    {
      value: 22,
      day: '2024-05-09',
    },
    {
      value: 24,
      day: '2024-05-10',
    },
    {
      value: 15,
      day: '2024-05-11',
    },
    {
      value: 4,
      day: '2024-05-12',
    },
    {
      value: 18,
      day: '2024-05-13',
    },
    {
      value: 19,
      day: '2024-05-14',
    },
    {
      value: 20,
      day: '2024-05-15',
    },
    {
      value: 29,
      day: '2024-05-16',
    },
    {
      value: 19,
      day: '2024-05-17',
    },
    {
      value: 5,
      day: '2024-05-18',
    },
    {
      value: 17,
      day: '2024-05-19',
    },
    {
      value: 13,
      day: '2024-05-20',
    },
    {
      value: 21,
      day: '2024-05-21',
    },
    {
      value: 37,
      day: '2024-05-22',
    },
    {
      value: 0,
      day: '2024-05-23',
    },
    {
      value: 13,
      day: '2024-05-24',
    },
    {
      value: 29,
      day: '2024-05-25',
    },
    {
      value: 15,
      day: '2024-05-26',
    },
    {
      value: 10,
      day: '2024-05-27',
    },
    {
      value: 3,
      day: '2024-05-28',
    },
    {
      value: 11,
      day: '2024-05-29',
    },
    {
      value: 6,
      day: '2024-05-30',
    },
    {
      value: 26,
      day: '2024-05-31',
    },
  ];
  // TODO: rect 위에 숫자 표시

  return (
    <div className='h-80 max-w'>
      <ResponsiveTimeRange
        data={data}
        from='2024-04-30'
        to='2024-05-31'
        emptyColor='#ffffff'
        colors={['#eeeeff', '#D8D8D8', '#989393']}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        dayRadius={50}
        dayBorderWidth={5}
        daySpacing={5}
        firstWeekday='monday'
        direction='vertical'
        minValue={0}
        maxValue={30}
        dayBorderColor='#ffffff'
        legends={[]}
      />
    </div>
  );
};

export default MonthlyGrass;
