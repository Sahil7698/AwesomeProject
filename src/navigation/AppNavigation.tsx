import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/RootStackProps';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import SettingScreen from '../screens/SettingScreen';
import NotificationSettingScreen from '../screens/NotificationSettingScreen';
import PasswordManagerScreen from '../screens/PasswordManagerScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';
import HelpCenterScreen from '../screens/HelpCenterScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import ChatScreen from '../screens/ChatScreen';
import BottomTabStack from './BottomTabStack';

const Stack = createNativeStackNavigator<RootStackParamList>();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabStack">
        <Stack.Screen
          name="TabStack"
          component={BottomTabStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgetPasswordScreen"
          component={ForgetPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditProfileScreen"
          component={EditProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SettingScreen"
          component={SettingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NotificationSettingScreen"
          component={NotificationSettingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PasswordManagerScreen"
          component={PasswordManagerScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HelpCenterScreen"
          component={HelpCenterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PrivacyPolicyScreen"
          component={PrivacyPolicyScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ScheduleScreen"
          component={ScheduleScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
