import React from 'react';

interface QuestionIconProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

const QuestionIcon: React.FC<QuestionIconProps> = ({
  className = 'text-main',
  width = 24,
  height = 24,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.604 10.245C15.317 11.494 14.457 12.044 13.828 12.447C13.177 12.863 12.952 13.037 12.952 13.626C12.952 13.8647 12.8572 14.0936 12.6884 14.2624C12.5196 14.4312 12.2907 14.526 12.052 14.526C11.8133 14.526 11.5844 14.4312 11.4156 14.2624C11.2468 14.0936 11.152 13.8647 11.152 13.626C11.152 12.021 12.138 11.391 12.858 10.93C13.43 10.565 13.733 10.35 13.85 9.842C13.951 9.401 13.871 9.011 13.61 8.683C13.268 8.254 12.657 7.976 12.052 7.976C11.074 7.976 10.278 8.773 10.278 9.751C10.278 9.9897 10.1832 10.2186 10.0144 10.3874C9.84561 10.5562 9.6167 10.651 9.378 10.651C9.13931 10.651 8.91039 10.5562 8.7416 10.3874C8.57282 10.2186 8.478 9.9897 8.478 9.751C8.47906 8.80344 8.85594 7.895 9.52597 7.22497C10.196 6.55494 11.1044 6.17806 12.052 6.177C13.201 6.177 14.337 6.707 15.018 7.562C15.62 8.318 15.828 9.271 15.604 10.245ZM12.068 17.984C11.7497 17.984 11.4445 17.8576 11.2195 17.6325C10.9944 17.4075 10.868 17.1023 10.868 16.784C10.868 16.4657 10.9944 16.1605 11.2195 15.9355C11.4445 15.7104 11.7497 15.584 12.068 15.584C12.3863 15.584 12.6915 15.7104 12.9165 15.9355C13.1416 16.1605 13.268 16.4657 13.268 16.784C13.268 17.1023 13.1416 17.4075 12.9165 17.6325C12.6915 17.8576 12.3863 17.984 12.068 17.984ZM12 1C5.924 1 1 5.925 1 12C1 18.076 5.924 23 12 23C18.075 23 23 18.076 23 12C23 5.925 18.075 1 12 1Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default QuestionIcon;
