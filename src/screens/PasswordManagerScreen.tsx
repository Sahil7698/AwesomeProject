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
import {
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CustomTextInput from '../componets/CustomTextInput';

const PasswordManagerScreen = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleUpdatePassword = () => {
    if (newPassword !== confirmPassword) {
      Alert.alert('New passwords do not match!');
      return;
    }
    console.log('Updating password...');
  };

  const navigation = useCustomNavigation('PasswordManagerScreen');
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={Color.STATUS_BAR_COLOR}
      />
      <CustomHeader
        title={'Password Manager'}
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
      <View style={styles.subContainer}>
        <CustomTextInput
          title="Current Password"
          placeholder="Enter Current Password"
          value={currentPassword}
          onChangeText={setCurrentPassword}
          secureTextEntry={!showCurrentPassword}
          rightButtonComponent={
            <TouchableOpacity
              style={styles.hideIconStyle}
              onPress={() => {
                setShowCurrentPassword(!showCurrentPassword);
              }}
            >
              <Image
                source={
                  showCurrentPassword
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
        <CustomTextInput
          title="New Password"
          placeholder="Enter New Password"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry={!showNew}
          rightButtonComponent={
            <TouchableOpacity
              style={styles.hideIconStyle}
              onPress={() => setShowNew(!showNew)}
            >
              <Image
                source={
                  showNew
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
          title="Confirm New Password"
          placeholder="Enter Confirm New Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!showConfirm}
          rightButtonComponent={
            <TouchableOpacity
              style={styles.hideIconStyle}
              onPress={() => setShowConfirm(!showConfirm)}
            >
              <Image
                source={
                  showConfirm
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
          style={styles.updateButtonStyle}
          onPress={handleUpdatePassword}
        >
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordManagerScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  backIconCountainerStyle: { height: '100%', justifyContent: 'center' },
  headerBackIconStyle: { height: wp(5), width: wp(10) },
  subContainer: {
    flex: 1,
    paddingHorizontal: wp(8),
    backgroundColor: Color.WHITE,
    paddingTop: wp(7),
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
  updateButtonStyle: {
    backgroundColor: Color.PRIMARY_COLOR,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    position:'absolute',
    bottom:wp(15),
    paddingHorizontal:wp(20),
    alignSelf:'center'
  },
  buttonText: {
    color: Color.WHITE,
    fontSize: 16,
    fontWeight: '700',
  },
});
