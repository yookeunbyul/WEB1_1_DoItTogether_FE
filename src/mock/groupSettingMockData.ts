export const groupSettingMockData = {
  group: {
    group_id: 1,
    group_name: '우리집 꾸미기 모임',
    created_at: '2024-11-28T00:00:00Z',
    updated_at: null,
  },
  members: [
    {
      member_id: 1,
      name: '리더다',
      nickname: '리더다',
      role: 'ADMIN',
      profile_image: {
        profile_image_id: 1,
        url: 'https://example.com/image1.jpg',
        type: 'KAKAO',
      },
    },
    {
      member_id: 2,
      name: '멤버다',
      nickname: '멤버다',
      role: 'PARTICIPANT',
      profile_image: {
        profile_image_id: 2,
        url: 'https://example.com/image2.jpg',
        type: 'KAKAO',
      },
    },
    {
      member_id: 3,
      name: '청소왕',
      nickname: '청소왕',
      role: 'PARTICIPANT',
      profile_image: {
        profile_image_id: 2,
        url: 'https://example.com/image2.jpg',
        type: 'KAKAO',
      },
    },
  ],
  currentUser: {
    member_id: 1,
    name: '리더다',
    nickname: '리더다',
  },
};
