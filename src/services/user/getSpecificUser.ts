import { axiosInstance } from '@/services/axiosInstance';
import { GetSpecificUserReq, GetSpecificUserRes } from '@/types/apis/userApi';

export const getSpecificUser = async ({ userId }: GetSpecificUserReq) => {
  try {
    const response = await axiosInstance.get<GetSpecificUserRes>(`/api/v1/users/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error('특정 유저 정보 조회에 실패했습니다');
  }
};
