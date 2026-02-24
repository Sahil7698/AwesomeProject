import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import React from 'react';
import { Color } from '../assets/styles/colors';
import CustomHeader from '../componets/CustomHeader';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import useCustomNavigation from '../hooks/useCustomNavigation';
import { RFValue } from 'react-native-responsive-fontsize';
import CustomTextInput from '../componets/CustomTextInput';

const LoginScreen = () => {
  const navigation = useCustomNavigation('LoginScreen');
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={Color.STATUS_BAR_COLOR}
      />
      <CustomHeader
        title={'Log in'}
        headerLeftComponent={
          <TouchableOpacity
            style={styles.backIconCountainerStyle}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={require('../assets/icons/back_icon.png')}
              style={styles.headerBackIconStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
        }
      />
      <View style={styles.bodyContainer}>
        <Text style={styles.titleStyle}>{'Welcome'}</Text>
        <Text style={styles.subTitleStyle}>
          {
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
          }
        </Text>
        <View style={styles.textInputContainer}>
          <CustomTextInput
            title="Email or Mobile Number"
            placeholder="example@example.com"
          />
          <CustomTextInput
            title="Password"
            placeholder="Enter Password"
            rightButtonComponent={
              <TouchableOpacity style={styles.hideIconStyle}>
                <Image
                  source={require('../assets/icons/hide_password.png')}
                  style={styles.hideIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            }
          />
          <TouchableOpacity style={styles.forgetPasswordContainer}>
            <Text style={styles.forgetPasswordStyle}>{'Forget Password?'}</Text>
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.loginButtonStyle}>
              <Text style={styles.loginButtonTextStyle}>{'Log In'}</Text>
            </TouchableOpacity>
            <Text>{'or sign up with'}</Text>
          </View>
          <View style={styles.socialContainerBox}>
            <TouchableOpacity style={styles.socialContainer}>
              <Image
                source={require('../assets/icons/google_logo.png')}
                style={styles.googleIconStyle}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialContainer}>
              <Image
                source={require('../assets/icons/fb_logo.png')}
                style={styles.fbIconStyle}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialContainer}>
              <Image
                source={require('../assets/icons/bio_logo.png')}
                style={styles.fbIconStyle}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.dontHaveAccountContainer}>
            <Text>{'Don’t have an account? '}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
              <Text style={{ color: Color.PRIMARY_COLOR }}>{'Sign Up'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  backIconCountainerStyle: { height: '100%', justifyContent: 'center' },
  headerBackIconStyle: { height: wp(5), width: wp(10) },
  bodyContainer: {
    backgroundColor: Color.WHITE,
    flex: 1,
    paddingHorizontal: RFValue(24),
    paddingTop: RFValue(10),
  },
  titleStyle: {
    fontSize: RFValue(24),
    fontWeight: '700',
    color: Color.PRIMARY_COLOR,
  },
  subTitleStyle: {
    fontSize: RFValue(12),
    color: Color.BLACK,
  },
  textInputContainer: {
    marginTop: RFValue(60),
  },
  hideIconStyle: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hideIcon: { height: 25, width: 25 },
  forgetPasswordContainer: {
    height: 20,
    width: '100%',
    alignItems: 'flex-end',
  },
  forgetPasswordStyle: { fontSize: 14, color: Color.PRIMARY_COLOR },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
  },
  loginButtonStyle: {
    backgroundColor: Color.PRIMARY_COLOR,
    height: 45,
    width: 207,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  loginButtonTextStyle: { color: Color.WHITE, fontSize: 20,fontWeight:'700' },
  signUpWithStyle: { alignItems: 'center', width: '100%' },
  socialContainer: {
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: Color.SIGNUP_BUTTON_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  socialContainerBox: {
    width: '100%',
    height: 45,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 30,
  },
  googleIconStyle: { height: 18, width: 18 },
  fbIconStyle: { height: 25, width: 25 },
  dontHaveAccountContainer: { justifyContent: 'center', flexDirection: 'row' },
});
