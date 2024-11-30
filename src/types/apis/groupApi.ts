import { BaseRes } from '@/types/apis/baseResponse';

/**
 * --------------------------------------------------
 * todo
 * - api 함수 매개변수 타입 적용 (Req)
 *  : 현재는 수정 범위가 광범위해 시간상 나중으로 미룸
 * --------------------------------------------------
 */

/** 그룹 정보 */
export interface Group {
  /** 그룹 아이디 */
  channelId: number;
  /** 그룹명 */
  name: string;
}

/** 그룹 생성 */
export interface CreateGroupReq {
  /** 그룹명 */
  name: string;
}

export interface CreateGroupRes extends BaseRes {
  result: Group;
}

/** 초대 링크(코드) 생성 */
export interface CreateViteLinkReq {
  /** 그룹 아이디 */
  channelId: number;
}

export interface CreateInviteLinkRes extends BaseRes {
  result: {
    /** 그룹 아이디 */
    channelId: number;
    /** 초대 코드 */
    inviteLink: string;
  };
}

/** 특정 유저 추방 */
export interface KickUserReq {
  /** 그룹 아이디 */
  channelId: number;
  /** 유저 이메일 */
  email: string;
}

export interface KickUserRes extends BaseRes {
  result: {
    /** 추방된 유저 이메일 */
    email: string;
    /** 유저 닉네임 */
    nickName: string;
  };
}

/** 일반 참가자가 채널 나가기 */
export interface LeaveGroupReq {
  /** 그룹 아이디 */
  channelId: number;
}

export interface LeaveGroupRes extends BaseRes {
  result?: {};
}

/** 그룹명 변경 */
export interface ChangeGroupNameReq {
  /** 변경될 그룹명 */
  name: string;
}

export interface ChangeGroupNameRes extends BaseRes {
  result: {
    /** 그룹 아이디 */
    channelId: number;
  };
}

/** 유저 */
export interface User {
  /** 유저 아이디 */
  userId: number;
  /** 유저 이메일 */
  email: string;
  /** 닉네임 */
  nickName: string;
  /** 역할 (ADMIN 또는 PARTICIPANT) */
  role: 'ADMIN' | 'PARTICIPANT';
}

/** 그룹 사용자 조회 */

export interface GetGroupUserReq extends Pick<Group, 'channelId'> {}
export interface GetGroupUserRes extends BaseRes {
  result: {
    /** 그룹 아이디 */
    channelId: number;
    /** 그룹 내의 모든 회원 리스트 */
    userList: Array<User>;
    /** 총 사용자 수 */
    totalElements: number;
    /** 총 페이지 수 */
    totalPages: number;
  };
}

/** 초대 링크(코드)로 방 입장 */
export interface JoinGroupReq {
  /** 초대 코드 */
  inviteLink: string;
}

export interface JoinGroupRes extends BaseRes {
  result: Group;
}

/** 내 그룹 목록 조회 */
export interface GetMyGroupRes extends BaseRes {
  result: {
    /** 유저 아이디 */
    userId: number;
    /** 그룹 목록 */
    channelList: Array<Group>;
  };
}
