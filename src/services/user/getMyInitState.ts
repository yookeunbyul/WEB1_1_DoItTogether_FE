import { axiosInstance } from '@/services/axiosInstance';
import { GetMyInitStateRes } from '@/types/apis/userApi';

export const getMyInitState = async () => {
  try {
    const response = await axiosInstance.get<GetMyInitStateRes>(`/api/v1/users/my/profile/setup`);
    return response.data;
  } catch (error) {
    throw new Error('내 초기 설정 상태 조회에 실패했습니다');
  }
};
