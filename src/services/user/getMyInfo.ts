import { axiosInstance } from '@/services/axiosInstance';
import { GetMyInfoRes } from '@/types/apis/userApi';

export const getMyInfo = async () => {
  try {
    const response = await axiosInstance.get<GetMyInfoRes>(`/api/v1/users/my`);
    return response.data;
  } catch (error) {
    throw new Error('내 정보 조회에 실패했습니다');
  }
};
