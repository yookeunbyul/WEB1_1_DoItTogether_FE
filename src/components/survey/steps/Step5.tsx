import SurveyTitle from '@/components/survey/SurveyTitle/SurveyTitle';
import TextTag from '@/components/common/tag/TextTag/TextTag';

interface Step5Props {
  title: string;
  results: string[];
}

const Step5: React.FC<Step5Props> = ({ title, results }) => {
  return (
    <div className='flex flex-1 flex-col gap-3'>
      <div className='mb-5'>
        <SurveyTitle title={title} />
      </div>

      <div className='flex flex-wrap gap-3'>
        {results.map(result => (
          <TextTag key={result} type='darkfill' label={`# ${result}`} />
        ))}
      </div>
    </div>
  );
};

export default Step5;
