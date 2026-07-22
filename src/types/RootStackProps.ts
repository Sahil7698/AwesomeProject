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
  HelpCenterScreen?: undefined;
  ScheduleScreen?: undefined;
  ChatScreen?: undefined;
  PaymentMethodScreen?: undefined;
  PaymentScreen?: undefined;
  PaymentSuccessScreen?: undefined;
  AddCardScreen?: undefined;
  TabStack: NavigatorScreenParams<TabStackParamList>;
  NotificationScreen?: undefined;
  HomeStack?: NavigatorScreenParams<HomeStackParamList>;
  DoctorsScreen?: { type?: string };
  PuzzleScreen?: undefined;
  ProductDetailsScreen?: { productid?: number };
  AuthStack: NavigatorScreenParams<AuthStackParamList>
  AppointmentStack: NavigatorScreenParams<AppointmentStackParamList>
  AllappintmentScreen?: undefined;
  CancelAppointment?: undefined;
  ReviewScreen?: undefined;
};

export type TabStackParamList = {
  ChatScreen?: undefined;
  HomeStack?: NavigatorScreenParams<HomeStackParamList>;
  ProfileScreen?: undefined;
  AppointmentStack: NavigatorScreenParams<AppointmentStackParamList>
};

export type HomeStackParamList = {
  HomeScreen?: undefined;
  NotificationScreen?: undefined;
  DoctorsScreen?: { type?: string };
};

export type AuthStackParamList = {
  LoginScreen?: undefined;
  SignupScreen?: undefined;
  ForgetPasswordScreen?: { type?: string };
};

export type AppointmentStackParamList = {
  AllappintmentScreen?: undefined;
  CancelAppointment?: undefined;
  ReviewScreen?: undefined;
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;
