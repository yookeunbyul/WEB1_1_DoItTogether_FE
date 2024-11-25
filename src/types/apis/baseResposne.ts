export interface BaseRes {
  /** 요청 성공 여부 */
  isSuccess: boolean;
  /** HTTP 상태 코드 */
  httpStatus: string;
  /** 응답 코드(비즈니스 로직에서 정의된 코드) */
  code: string;
  /** 응답 메세지 */
  message: string;
}
