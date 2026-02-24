import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Alert,
  ImageSourcePropType,
  GestureResponderEvent,
} from 'react-native';
import React, { useState } from 'react';
import { Color } from '../assets/styles/colors';
import CustomHeader from '../componets/CustomHeader';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import useCustomNavigation from '../hooks/useCustomNavigation';
import { RFValue } from 'react-native-responsive-fontsize';
import CustomTextInput from '../componets/CustomTextInput';

interface SocialButtonProps {
  icon: ImageSourcePropType;
  onPress: (event: GestureResponderEvent) => void;
}

const SocialButton = ({ icon, onPress }: SocialButtonProps) => (
  <TouchableOpacity style={styles.socialContainer} onPress={onPress}>
    <Image source={icon} style={styles.fbIconStyle} resizeMode="contain" />
  </TouchableOpacity>
);

const LoginScreen = () => {
  const navigation = useCustomNavigation('LoginScreen');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Enter Email or Password');
    } else {
      console.log(email, password);
    }
  };
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
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <CustomTextInput
            title="Password"
            placeholder="Enter Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            rightButtonComponent={
              <TouchableOpacity
                style={styles.hideIconStyle}
                onPress={() => {
                  setShowPassword(!showPassword);
                }}
              >
                <Image
                  source={
                    showPassword
                      ? require('../assets/icons/show_password.png')
                      : require('../assets/icons/hide_password.png')
                  }
                  style={styles.hideIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            }
          />
          <TouchableOpacity
            style={styles.forgetPasswordContainer}
            onPress={() => navigation.navigate('ForgetPasswordScreen')}
          >
            <Text style={styles.forgetPasswordStyle}>{'Forget Password?'}</Text>
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.loginButtonStyle}
              onPress={handleLogin}
            >
              <Text style={styles.loginButtonTextStyle}>{'Log In'}</Text>
            </TouchableOpacity>
            <Text>{'or sign up with'}</Text>
          </View>
          <View style={styles.socialContainerBox}>
            <SocialButton
              icon={require('../assets/icons/google_logo.png')}
              onPress={() => {
                console.log('google');
              }}
            />
            <SocialButton
              icon={require('../assets/icons/fb_logo.png')}
              onPress={() => {
                console.log('fb');
              }}
            />
            <SocialButton
              icon={require('../assets/icons/bio_logo.png')}
              onPress={() => {
                console.log('bio');
              }}
            />
          </View>
          <View style={styles.dontHaveAccountContainer}>
            <Text>{'Don’t have an account? '}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignupScreen')}
            >
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
  loginButtonTextStyle: { color: Color.WHITE, fontSize: 20, fontWeight: '700' },
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
  fbIconStyle: { height: 25, width: 25 },
  dontHaveAccountContainer: { justifyContent: 'center', flexDirection: 'row' },
  grayText: { color: Color.BLACK, fontSize: RFValue(13) },
  signUpText: {
    color: Color.PRIMARY_COLOR,
    fontSize: RFValue(13),
    fontWeight: '700',
  },
  orTextStyle: { color: Color.BLACK, fontSize: RFValue(12) },
});
