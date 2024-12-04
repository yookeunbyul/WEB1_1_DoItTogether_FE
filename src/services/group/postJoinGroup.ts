import { axiosInstance } from '@/services/axiosInstance';
import { JoinGroupReq, JoinGroupRes } from '@/types/apis/groupApi';

export const postJoinGroup = async ({ inviteLink }: JoinGroupReq) => {
  try {
    const response = await axiosInstance.post<JoinGroupRes>(`/api/v1/channels/join/${inviteLink}`);
    return response.data;
  } catch (error) {
    throw new Error('유효한 링크인지 확인해주세요!');
  }
};
