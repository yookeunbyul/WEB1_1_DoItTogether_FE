import { axiosInstance } from '@/services/axiosInstance';
import { GetAllPresetListReq, GetAllPresetListRes } from '@/types/apis/presetApi';
import { GetPageParams } from '@/types/apis/pageApi';

export const getAllCategoryList = async (
  data: GetAllPresetListReq,
  params: GetPageParams = { page: 0, size: 20 }
) => {
  try {
    const response = await axiosInstance.get<GetAllPresetListRes>(
      `/api/v1/channels/${data.channelId}/presets/keywords`,
      { params }
    );
    return response.data;
  } catch (error) {
    console.error('프리셋 전체 리스트 조회 실패:', error);
    throw error;
  }
};
