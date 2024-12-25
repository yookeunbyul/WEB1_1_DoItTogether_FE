import { axiosInstance } from '@/services/axiosInstance';
import { PokeReq, PokeRes } from '@/types/apis/noticeManage';

export const postPoke = async ({ channelId, targetUserId, reactDate }: PokeReq) => {
  const response = await axiosInstance.post<PokeRes>(
    `/api/v1/channels/${channelId}/reactions/poke`,
    { targetUserId, reactDate }
  );
  return response.data;
};
