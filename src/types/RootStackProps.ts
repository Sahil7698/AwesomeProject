import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  WelcomeScreen?: undefined;
  LoginScreen?: undefined;
  SignupScreen?: undefined;
  ForgetPasswordScreen?: undefined;
  HomeScreen?: undefined;
  ProfileScreen?: undefined;
  EditProfileScreen?: undefined;
  SettingScreen?: undefined;
  NotificationSettingScreen?: undefined;
  PasswordManagerScreen?: undefined;
  PrivacyPolicyScreen?: undefined;
  HeplCenterScreen?: undefined;
  ScheduleScreen?: undefined;
  ChatScreen?: undefined;
  TabStack: NavigatorScreenParams<TabStackParamList>;
};

export type TabStackParamList = {
  ChatScreen?: undefined;
  HomeScreen?: undefined;
  ProfileScreen?: undefined;
  ScheduleScreen?: undefined;
  // ProfileStack?: NavigatorScreenParams<ProfileStackParamList>;
};

export type ProfileStackParamList = {
  ProfileScreen?: undefined;
  EditProfileScreen?: undefined;
  FavoriteScreen?: undefined;
  PaymentHistoryScreen?: undefined;
  WithdrawalHistoryScreen?: undefined;
  RefundHistoryScreen?: undefined;
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;
