export interface CreateChannelResponse {
  isSuccess: boolean;
  httpStatus: string;
  code: string;
  message: string;
  result: {
    channelId: number;
    name: string;
  };
}
