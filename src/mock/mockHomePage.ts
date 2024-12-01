import { Housework } from '@/types/apis/houseworkApi';

export const GROUP_OPTIONS = ['우리집', '회사', '학교'];

export const DUMMY_HOUSEWORKS: Housework[] = [
  {
    houseworkId: 1,
    category: '거실',
    task: '바닥 걸레질',
    startDate: '2024-12-01', // 예시 날짜, 필요에 맞게 수정
    startTime: '오후 8:00',
    isAllDay: false, // 하루 종일 여부, 필요에 따라 수정
    assignee: '고종원', // 변경된 이름
    userId: 1, // userId는 실제 데이터에 맞게 수정
    assigneeId: 1, // assigneeId는 실제 데이터에 맞게 수정
    status: 'INCOMPLETE',
  },
  {
    houseworkId: 2,
    category: '주방',
    task: '청소',
    startDate: '2024-12-01', // 예시 날짜, 필요에 맞게 수정
    startTime: '오후 9:00',
    isAllDay: false, // 하루 종일 여부, 필요에 따라 수정
    assignee: '이가은', // 변경된 이름
    userId: 2, // userId는 실제 데이터에 맞게 수정
    assigneeId: 2, // assigneeId는 실제 데이터에 맞게 수정
    status: 'INCOMPLETE',
  },
  {
    houseworkId: 3,
    category: '기타',
    task: '세탁기 돌리기',
    startDate: '2024-12-01', // 예시 날짜, 필요에 맞게 수정
    startTime: '오후 10:00',
    isAllDay: false, // 하루 종일 여부, 필요에 따라 수정
    assignee: '육은별', // 변경된 이름
    userId: 3, // userId는 실제 데이터에 맞게 수정
    assigneeId: 3, // assigneeId는 실제 데이터에 맞게 수정
    status: 'COMPLETE',
  },
  {
    houseworkId: 4, // 새 작업 추가
    category: '거실',
    task: '청소기 돌리기',
    startDate: '2024-12-01', // 예시 날짜, 필요에 맞게 수정
    startTime: '오후 11:00',
    isAllDay: false, // 하루 종일 여부, 필요에 따라 수정
    assignee: '박아영', // 변경된 이름
    userId: 4, // userId는 실제 데이터에 맞게 수정
    assigneeId: 4, // assigneeId는 실제 데이터에 맞게 수정
    status: 'INCOMPLETE',
  },
];
