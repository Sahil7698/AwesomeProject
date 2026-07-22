import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { AppointmentStackParamList } from '../types/RootStackProps';
import AllappintmentScreen from '../screens/AllappintmentScreen';
import CancelAppointment from '../screens/CancelAppointment';
import ReviewScreen from '../screens/ReviewScreen';

const Stack = createNativeStackNavigator<AppointmentStackParamList>();

const AppointmentStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="AllappintmentScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="AllappintmentScreen" component={AllappintmentScreen} />
      <Stack.Screen name="CancelAppointment" component={CancelAppointment} />
      <Stack.Screen name="ReviewScreen" component={ReviewScreen} />
    </Stack.Navigator>
  )
}

export default AppointmentStack