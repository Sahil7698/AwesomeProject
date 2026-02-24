import {
  Alert,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import CustomHeader from '../componets/CustomHeader';
import { Color } from '../assets/styles/colors';
import useCustomNavigation from '../hooks/useCustomNavigation';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import CustomTextInput from '../componets/CustomTextInput';

const ForgetPasswordScreen = () => {
  const navigation = useCustomNavigation('ForgetPasswordScreen');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleCreatePassword = () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match!');
      return;
    }
    console.log('Password updated to:', password);
    // Add your API call logic here
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={Color.STATUS_BAR_COLOR}
      />
      <CustomHeader
        title={'Set Password'}
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
        <Text style={styles.subTitleStyle}>
          {
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
          }
        </Text>
        <View style={styles.textInputStyle}>
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
          <CustomTextInput
            title="Confirm Password"
            placeholder="Enter Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
            rightButtonComponent={
              <TouchableOpacity
                style={styles.hideIconStyle}
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <Image
                  source={
                    showConfirmPassword
                      ? require('../assets/icons/show_password.png')
                      : require('../assets/icons/hide_password.png')
                  }
                  style={styles.hideIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            }
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.loginButtonStyle}
            onPress={handleCreatePassword}
          >
            <Text style={styles.loginButtonTextStyle}>
              {'Create New Password'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ForgetPasswordScreen;

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
    marginTop: 30,
  },
  loginButtonStyle: {
    backgroundColor: Color.PRIMARY_COLOR,
    height: 45,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 30,
  },
  loginButtonTextStyle: { color: Color.WHITE, fontSize: 20, fontWeight: '700' },
  textInputStyle: { marginTop: 40 },
});
