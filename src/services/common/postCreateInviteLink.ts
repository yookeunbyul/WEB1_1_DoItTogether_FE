import { axiosInstance } from '@/services/axiosInstance';
import { CreateInviteLinkReq, CreateInviteLinkRes } from '@/types/apis/groupApi';

export const postCreateInviteLink = async ({ channelId }: CreateInviteLinkReq) => {
  try {
    const response = await axiosInstance.post<CreateInviteLinkRes>(
      `/api/v1/channels/${channelId}/invite-link`
    );
    return response.data;
  } catch (error) {
    console.error('초대 링크 생성 실패:', error);
    throw error;
  }
};
