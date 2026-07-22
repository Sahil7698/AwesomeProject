import React from 'react';
import { AuthStackParamList } from '../types/RootStackProps';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen
        name="ForgetPasswordScreen"
        component={ForgetPasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
