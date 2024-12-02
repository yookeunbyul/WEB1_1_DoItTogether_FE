import { BaseRes } from '@/types/apis/baseResponse';
import { Common } from '@/types/apis/commonApi';

export interface Housework {
  /** 집안일 ID */
  houseworkId: number;
  /** 카테고리 이름 */
  category: string;
  /** 카테고리에 해당하는 작업 목록 */
  task: string;
  /** 진행 날짜 */
  startDate: string;
  /** 진행 시간 */
  startTime: string | null;
  /** 하루 종일 여부 */
  isAllDay: boolean;
  /** 작업 담당자 이름 */
  assignee: string;
  /** 작업 담장자 userId */
  userId: number;
  /** 작업 담당자 assigneeId */
  assigneeId: number;
  /** 완료 여부 */
  status: string;
}

interface HouseworkCommonReq
  extends Pick<Common, 'channelId'>,
    Pick<Housework, 'category' | 'task' | 'startDate' | 'startTime' | 'userId'> {}

// 집안일 추가
export interface AddHouseworkReq extends HouseworkCommonReq {}

export interface AddHouseworkRes extends BaseRes {
  result: {};
}

// 집안일 수정
export interface PutHouseworkReq extends HouseworkCommonReq, Pick<Housework, 'houseworkId'> {}

export interface PutHouseworkRes extends BaseRes {
  result: {};
}

// 집안일 삭제
export interface DeleteHouseworkReq
  extends Pick<Common, 'channelId'>,
    Pick<Housework, 'houseworkId'> {}

export interface DeleteHouseworkRes extends BaseRes {
  result: {};
}

// 집안일 목록 조회
export interface GetHouseworkReq extends Pick<Common, 'channelId'> {
  targetDate: string;
  pageNumber: number;
  pageSize: number;
}

export interface GetHouseworkRes extends BaseRes {
  result: {
    responses: Array<Housework>;
    currentPage: number;
    size: number;
    first: boolean;
    hasNext: boolean;
  };
}

// 집안일 담당자별 목록 조회
export interface GetHouseworkByAssigneeReq
  extends Pick<Common, 'channelId'>,
    Pick<Housework, 'assigneeId'> {
  targetDate: string;
  pageNumber: number;
  pageSize: number;
}

export interface GetHouseworkByAssigneeRes extends BaseRes {
  result: {
    responses: Array<Housework>;
    currentPage: number;
    size: number;
    first: boolean;
    hasNext: boolean;
  };
}
