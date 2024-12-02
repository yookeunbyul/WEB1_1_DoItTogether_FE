import { axiosInstance } from '@/services/axiosInstance';
import { GetWeeklyScoreReq, GetWeeklyScoreRes } from '@/types/apis/statisticsApi';

export const getWeeklyScore = async (data: GetWeeklyScoreReq) => {
  try {
    const response = await axiosInstance.get<GetWeeklyScoreRes>(
      `/api/v1/channels/${data.channelId}/statistics/weekly/${data.targetDate}/score`
    );
    return response.data;
  } catch (error) {
    console.error('주간 통계 랭킹 조회 실패:', error);
    throw error;
  }
};
