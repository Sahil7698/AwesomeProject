import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { TabStackParamList } from '../types/RootStackProps';
import { Color } from '../assets/styles/colors';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import ChatScreen from '../screens/ChatScreen';

const BottomTab = createBottomTabNavigator<TabStackParamList>();

const BottomTabStack = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Color.BLACK,
        tabBarInactiveTintColor: Color.WHITE,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: hp(6.5),
          width: wp(85),
          backgroundColor: Color.PRIMARY_COLOR,
          borderRadius: 50,
          bottom: 25,
          position: 'absolute',
          shadowColor: Color.BLACK,
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowRadius: 7,
          shadowOpacity: 0.2,
          elevation: 0,
          paddingTop: hp(0.8),
          marginHorizontal: wp(7.5),
        },
        tabBarShowLabel: false,
      }}
    >
      <BottomTab.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.tabContainer,
                {
                  backgroundColor: focused ? Color.WHITE : Color.PRIMARY_COLOR,
                },
              ]}
            >
              <Image
                source={require('../assets/icons/home_icon.png')}
                style={{
                  height: RFValue(20),
                  width: RFValue(20),
                  tintColor: focused ? Color.BLACK : Color.WHITE,
                }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name={'ChatScreen'}
        component={ChatScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ focused }) => (
           <View
              style={[
                styles.tabContainer,
                {
                  backgroundColor: focused ? Color.WHITE : Color.PRIMARY_COLOR,
                },
              ]}
            >
              <Image
                source={require('../assets/icons/msg_tab_icon.png')}
                style={{
                  height: focused ? RFValue(20) : RFValue(25),
                  width: focused ? RFValue(20) : RFValue(25),
                  tintColor: focused ? Color.BLACK : Color.WHITE,
                }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name={'ProfileScreen'}
        component={ProfileScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ focused }) => (
           <View
              style={[
                styles.tabContainer,
                {
                  backgroundColor: focused ? Color.WHITE : Color.PRIMARY_COLOR,
                },
              ]}
            >
              <Image
                source={require('../assets/icons/profile_tab.png')}
                style={{
                  height:focused ? RFValue(20) : RFValue(25),
                  width: focused ? RFValue(20) : RFValue(25),
                  tintColor: focused ? Color.BLACK : Color.WHITE,
                }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name={'ScheduleScreen'}
        component={ScheduleScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.tabContainer,
                {
                  backgroundColor: focused ? Color.WHITE : Color.PRIMARY_COLOR,
                },
              ]}
            >
              <Image
                source={require('../assets/icons/schedule_icon.png')}
                style={{
                  height: focused ? RFValue(20) : RFValue(25),
                  width: focused ? RFValue(20) : RFValue(25),
                  tintColor: focused ? Color.BLACK : Color.WHITE,
                }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabStack;

const styles = StyleSheet.create({
  tabContainer: {
    height: RFValue(30),
    width: RFValue(30),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});
