interface CompletionRateProps {
  rate: number;
  size?: number;
  bgColor?: string;
  gageColor?: string;
}

const CompletionRate: React.FC<CompletionRateProps> = ({
  rate,
  size = 24,
  bgColor = '#f9f9f9',
  gageColor = '#989393',
}) => {
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const validRate = Math.min(100, Math.max(0, rate));
  const offset = circumference - (validRate / 100) * circumference;

  return (
    <div className={`size-${size} relative flex items-center`}>
      <svg className='size-full -rotate-90' viewBox='0 0 100 100'>
        <circle cx='50' cy='50' r={radius} fill='none' stroke={bgColor} strokeWidth='10' />
        <circle
          cx='50'
          cy='50'
          r={radius}
          fill='none'
          stroke={gageColor}
          strokeWidth='10'
          style={{
            strokeDasharray: `${circumference}`,
            strokeDashoffset: offset,
            transition: 'stroke-dashoffset 0.5s ease',
          }}
        />
      </svg>
      <span className='-translate-x-3 text-16' style={{ color: gageColor }}>
        {validRate}%
      </span>
    </div>
  );
};

export default CompletionRate;
