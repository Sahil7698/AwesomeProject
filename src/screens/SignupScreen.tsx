import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import CustomHeader from '../componets/CustomHeader';
import { Color } from '../assets/styles/colors';
import CustomTextInput from '../componets/CustomTextInput';
import useCustomNavigation from '../hooks/useCustomNavigation';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface SocialButtonProps {
  icon: ImageSourcePropType;
  onPress: (event: GestureResponderEvent) => void;
}

const SocialButton = ({ icon, onPress }: SocialButtonProps) => (
  <TouchableOpacity style={styles.socialContainer} onPress={onPress}>
    <Image source={icon} style={styles.fbIconStyle} resizeMode="contain" />
  </TouchableOpacity>
);

const SignupScreen = () => {
  const navigation = useCustomNavigation('SignupScreen');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [dob, setDob] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = () => {
    console.log({ fullName, email, password, mobile, dob });
  };
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
        <CustomTextInput
          title="Full Name"
          placeholder="Enter Your Full Name"
          value={fullName}
          onChangeText={setFullName}
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
              onPress={() => setShowPassword(!showPassword)}
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
        <CustomTextInput
          title="Email"
          placeholder="Enter Your Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <CustomTextInput
          title="Mobile Number"
          placeholder="Enter Your Mobile Number"
          keyboardType="phone-pad"
          value={mobile}
          onChangeText={setMobile}
        />
        <CustomTextInput
          title="Date Of Birth"
          placeholder="DD/MM/YY"
          value={dob}
          onChangeText={setDob}
        />
        <View style={styles.buttonContainer}>
          <Text>{'By continuing, you agree to'}</Text>
          <View style={styles.termTextStyle}>
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
          <TouchableOpacity
            style={styles.loginButtonStyle}
            onPress={handleSignup}
          >
            <Text style={styles.loginButtonTextStyle}>{'Sign Up'}</Text>
          </TouchableOpacity>
          <Text>{'or sign up with'}</Text>
        </View>
        <View style={styles.socialContainerBox}>
          <SocialButton
            icon={require('../assets/icons/google_logo.png')}
            onPress={() => {}}
          />
          <SocialButton
            icon={require('../assets/icons/fb_logo.png')}
            onPress={() => {}}
          />
          <SocialButton
            icon={require('../assets/icons/bio_logo.png')}
            onPress={() => {}}
          />
        </View>
        <View style={styles.dontHaveAccountContainer}>
          <Text>{'Already have an account? '}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={{ color: Color.PRIMARY_COLOR }}>{'Log In'}</Text>
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
  fbIconStyle: { height: 25, width: 25 },
  dontHaveAccountContainer: { justifyContent: 'center', flexDirection: 'row' },
  termTextStyle: { flexDirection: 'row' },
});
