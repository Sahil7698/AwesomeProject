import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CustomHeader from '../componets/CustomHeader';
import { Color } from '../assets/styles/colors';
import CustomTextInput from '../componets/CustomTextInput';
import useCustomNavigation from '../hooks/useCustomNavigation';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const SignupScreen = () => {
  const navigation = useCustomNavigation('SignupScreen');
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={Color.STATUS_BAR_COLOR}
      />
      <CustomHeader
        title={'New Account'}
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
        <CustomTextInput title="Full Name" placeholder="Enter Your Full Name" />
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
        <CustomTextInput title="Email" placeholder="Enter Your Email" />
        <CustomTextInput
          title="Mobile Number"
          placeholder="Enter Your Mobile Number"
        />
        <CustomTextInput title="Date Of Birth" placeholder="DD/MM/YY" />
        <View style={styles.buttonContainer}>
          <Text>{'By continuing, you agree to'}</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity>
              <Text style={{ color: Color.PRIMARY_COLOR }}>
                {'Terms of Use'}
              </Text>
            </TouchableOpacity>
            <Text style={{ color: Color.BLACK }}>{' and '}</Text>
            <TouchableOpacity>
              <Text style={{ color: Color.PRIMARY_COLOR }}>
                {'Privacy Policy.'}
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.loginButtonStyle}>
            <Text style={styles.loginButtonTextStyle}>{'Sign Up'}</Text>
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
  );
};

export default SignupScreen;

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
  hideIconStyle: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hideIcon: { height: 25, width: 25 },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  loginButtonStyle: {
    backgroundColor: Color.PRIMARY_COLOR,
    height: 45,
    width: 207,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  loginButtonTextStyle: { color: Color.WHITE, fontSize: 20, fontWeight: '700' },
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
