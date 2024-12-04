import { axiosInstance } from '@/services/axiosInstance';

export const patchMyInitState = async () => {
  try {
    const response = await axiosInstance.patch(`/api/v1/users/my/profile/setup`);
    return response.data;
  } catch (error) {
    throw new Error('프로필 수정에 실패했습니다');
  }
};
