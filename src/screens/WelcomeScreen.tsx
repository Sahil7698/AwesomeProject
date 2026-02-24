import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Color } from '../assets/styles/colors';
import useCustomNavigation from '../hooks/useCustomNavigation';

const WelcomeScreen = () => {
  const navigation = useCustomNavigation('WelcomeScreen');
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={Color.WHITE}
      />
      <Image
        source={require('../assets/icons/welcome_screen_logo.png')}
        style={styles.logoImage}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>
          {
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
          }
        </Text>
      </View>

      <TouchableOpacity
        style={styles.loginBtnContainer}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        <Text style={styles.loginBtnTextStyle}>{'Log In'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signUpBtnContainer}
        onPress={() => navigation.navigate('SignupScreen')}
      >
        <Text style={styles.signUpBtnTextStyle}>{'Sign Up'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  logoImage: { height: 251, width: 144 },
  textContainer: { marginHorizontal: 20, marginTop: 84 },
  textStyle: { fontSize: 12, textAlign: 'center', color: 'black' },
  loginBtnContainer: {
    backgroundColor: Color.PRIMARY_COLOR,
    height: 45,
    width: 207,
    borderRadius: 30,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBtnTextStyle: { color: 'white', fontSize: 24 },
  signUpBtnContainer: {
    backgroundColor: Color.SIGNUP_BUTTON_COLOR,
    height: 45,
    width: 207,
    borderRadius: 30,
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpBtnTextStyle: { color: Color.PRIMARY_COLOR, fontSize: 24 },
});
