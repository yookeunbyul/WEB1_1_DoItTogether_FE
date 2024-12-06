import { axiosInstance } from '@/services/axiosInstance';
import { PatchMyInitStateRes } from '@/types/apis/userApi';

export const patchMyInitState = async () => {
  try {
    const response = await axiosInstance.patch<PatchMyInitStateRes>(
      `/api/v1/users/my/profile/setup`
    );
    return response.data;
  } catch (error) {
    throw new Error('내 초기 상태 변경에 실패했습니다');
  }
};
