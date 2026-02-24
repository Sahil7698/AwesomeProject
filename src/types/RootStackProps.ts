import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  WelcomeScreen?: undefined;
  LoginScreen?: undefined;
  SignupScreen?: undefined;
  ForgetPasswordScreen?: undefined;
  TabStack: NavigatorScreenParams<TabStackParamList>;
};

export type TabStackParamList = {
  HomeScreen?: undefined;
  MovieScreen?: undefined;
  DemoScreen?: undefined;
  ProfileScreen?: undefined;
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;
