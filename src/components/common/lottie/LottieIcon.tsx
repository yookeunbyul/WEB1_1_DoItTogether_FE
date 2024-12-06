import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import React from 'react';

interface LottieIconProps {
  src?: string;
  width?: number;
  height?: number;
}

const LottieIcon: React.FC<LottieIconProps> = ({
  src = 'https://lottie.host/3a5fedb6-baba-4ee2-a638-edb3bf49df92/W2TzyAOtd6.json',
  width = 100,
  height = 100,
}) => {
  return <DotLottieReact src={src} loop autoplay width={width} height={height} />;
};

export default LottieIcon;
