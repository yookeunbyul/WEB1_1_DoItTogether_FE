import { useState } from 'react';

import React from 'react';

interface ProfileImgProps {
  width?: number;
  height?: number;
}

const ProfileImg: React.FC<ProfileImgProps> = ({ width = 32, height = 32 }) => {
  const [profileImg] = useState<string | null>(null);
  // 기존
  // const [profileImg, setProfileImg] = useState<string | null>(null);

  // TODO 컴포넌트 역할 분리 (상태, 함수)
  // const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     const imageUrl = URL.createObjectURL(file);
  //     setProfileImg(imageUrl);
  //   }
  // };

  return (
    <div className={`relative h-${height} w-${width}`}>
      <div className='flex h-full w-full items-center justify-center rounded-full bg-gray03'>
        {profileImg ? (
          <img
            src={profileImg}
            alt='프로필 사진'
            className='h-full w-full rounded-full object-cover'
          />
        ) : (
          // TODO 기본 이미지 경로 설정
          // <img src={} alt='기본 사진' className='object-cover w-full h-full' />
          <span></span>
        )}
      </div>
      {/* <label className='absolute bottom-0 right-0 flex items-center justify-center w-10 h-10 rounded-full cursor-pointer bg-black01'>
        <input type='file' accept='image/*' onChange={handleImgChange} className='hidden' />
      </label> */}
    </div>
  );
};

export default ProfileImg;
