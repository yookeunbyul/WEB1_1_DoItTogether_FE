interface CompletionRateProps {
  rate: number;
  size?: number;
  bgColor?: string;
  gageColor?: string;
}

const CompletionRate: React.FC<CompletionRateProps> = ({
  rate,
  size = 4,
  bgColor = '#f9f9f9',
  gageColor = '#989393',
}) => {
  const radius = 4;
  const circumference = 2 * Math.PI * radius;
  const validRate = Math.min(100, Math.max(0, rate));
  const offset = circumference - (validRate / 100) * circumference;

  return (
    <div className={`size-${size} relative flex items-center gap-1`}>
      <svg className='size-full -rotate-90' viewBox='0 0 12 12'>
        <circle cx='6' cy='6' r='4' fill='none' stroke={bgColor} strokeWidth='3' />
        <circle
          cx='6'
          cy='6'
          r='4'
          fill='none'
          stroke={gageColor}
          strokeWidth='3'
          style={{
            strokeDasharray: `${circumference}`,
            strokeDashoffset: offset,
            transition: 'stroke-dashoffset 0.5s ease',
          }}
        />
      </svg>
      <span className='text-16' style={{ color: gageColor }}>
        {validRate}%
      </span>
    </div>
  );
};

export default CompletionRate;
