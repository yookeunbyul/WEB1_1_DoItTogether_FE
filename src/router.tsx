import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '@/layout/MainLayout';
import GroupLayout from '@/layout/GroupLayout';
import StatisticsLayout from '@/layout/StatisticsLayout';

import ErrorPage from '@/pages/ErrorPage';
import LandingPage from '@/pages/LandingPage';
import RegisterPage from '@/pages/RegisterPage';
import SurveyIntroPage from '@/pages/SurveyIntroPage';
import SurveyPage from '@/pages/SurveyPage';
import GroupCreatePage from '@/pages/GroupCreatePage';
import GroupSelectPage from '@/pages/GroupSelectPage';
import GroupInviteReceivePage from '@/pages/GroupInviteReceivePage';
import GroupInviteSendPage from '@/pages/GroupInviteSendPage';
import GroupSettingPage from '@/pages/GroupSettingPage';
import HomePage from '@/pages/HomePage';
import WeeklyStatisticsPage from '@/pages/WeeklyStatisticsPage';
import MonthlyStatisticsPage from '@/pages/MonthlyStatisticsPage';
import PresetSettingPage from '@/pages/PresetSettingPage';
import MyPage from '@/pages/MyPage';
import MyPageEditPage from '@/pages/MyPageEditPage';
import HouseWorkStepOnePage from '@/pages/HouseWorkStepOnePage';
import HouseWorkStepTwoPage from '@/pages/HouseWorkStepTwoPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/survey-intro',
    element: <SurveyIntroPage />,
  },
  {
    path: '/survey',
    element: <SurveyPage />,
  },
  {
    path: '/group-select',
    element: <GroupSelectPage />,
  },
  {
    path: '/group/create',
    element: <GroupCreatePage />,
  },
  {
    path: '/group/invite-receive',
    element: <GroupInviteReceivePage />,
  },
  {
    path: '/main',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'statistics',
        element: <StatisticsLayout />,
        children: [
          {
            path: 'weekly',
            element: <WeeklyStatisticsPage />,
          },
          {
            path: 'monthly',
            element: <MonthlyStatisticsPage />,
          },
        ],
      },
      {
        path: 'group-setting',
        element: <GroupSettingPage />,
      },
      {
        path: 'my-page',
        element: <MyPage />,
      },
      {
        path: 'my-page/edit',
        element: <MyPageEditPage />,
      },
    ],
  },
  {
    path: '/group-setting/preset-setting',
    element: <PresetSettingPage />,
  },
  {
    path: '/add-housework/step1',
    element: <HouseWorkStepOnePage />,
  },
  {
    path: '/add-housework/step2',
    element: <HouseWorkStepTwoPage />,
  },
]);
