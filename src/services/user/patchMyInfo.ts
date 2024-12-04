import { axiosInstance } from '@/services/axiosInstance';
import { PatchMyProfileReq, PatchMyProfileRes } from '@/types/apis/userApi';

export const patchMyInfo = async ({ nickName }: PatchMyProfileReq) => {
  try {
    const response = await axiosInstance.patch<PatchMyProfileRes>(`/api/v1/users/my/profile`, {
      nickName,
    });
    return response.data;
  } catch (error) {
    throw new Error('프로필 수정에 실패했습니다');
  }
};
