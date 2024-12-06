// hooks/useDeviceHeight.ts
import { useEffect, useState } from 'react';

const useDeviceHeight = () => {
  const [customHeightClass, setCustomHeightClass] = useState('');

  useEffect(() => {
    const isIPhone = /iPhone/.test(navigator.userAgent);
    if (isIPhone) {
      setCustomHeightClass('h-[calc(100vh-100px)]'); // 아이폰일 경우
    } else {
      setCustomHeightClass('h-[calc(100vh-56px)]'); // 안드로이드일 경우
    }
  }, []);

  return customHeightClass;
};

export default useDeviceHeight;
