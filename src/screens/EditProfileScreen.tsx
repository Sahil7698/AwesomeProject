import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { Color } from '../assets/styles/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomHeader from '../componets/CustomHeader';
import useCustomNavigation from '../hooks/useCustomNavigation';
import CustomTextInput from '../componets/CustomTextInput';

const EditProfileScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [dob, setDob] = useState('');
  const navigation = useCustomNavigation('EditProfileScreen');

  const handleUpdateButton = () => {
    console.log(fullName, email, mobile, dob);
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={Color.STATUS_BAR_COLOR}
      />
      <CustomHeader
        title={'Profile'}
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
        <View style={styles.profileImageContainer}>
          <View style={styles.profileImageStyle}>
            <Image
              source={require('../assets/images/profile_img.png')}
              style={styles.profileImage}
              resizeMode="contain"
            />
            <TouchableOpacity style={styles.editIconContainer}>
              <Image
                source={require('../assets/icons/edit_profile_icon.png')}
                style={styles.editIconStyle}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ paddingHorizontal: wp(8) }}>
          <CustomTextInput
            title="Full Name"
            placeholder="Enter Your Full Name"
            value={fullName}
            onChangeText={setFullName}
          />
          <CustomTextInput
            title="Mobile Number"
            placeholder="Enter Your Mobile Number"
            keyboardType="phone-pad"
            value={mobile}
            onChangeText={setMobile}
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
            title="Date Of Birth"
            placeholder="DD/MM/YY"
            value={dob}
            onChangeText={setDob}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.updateButtonStyle}
              onPress={handleUpdateButton}
            >
              <Text style={styles.updateButtonTextStyle}>
                {'Update Profile'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  backIconCountainerStyle: { height: '100%', justifyContent: 'center' },
  headerBackIconStyle: { height: wp(5), width: wp(10) },
  bodyContainer: { backgroundColor: Color.WHITE, flex: 1 },
  profileImageContainer: {
    width: wp(100),
    height: hp(23),
    alignItems: 'center',
  },
  profileImageStyle: {
    width: wp(33),
    height: wp(33),
    borderRadius: wp(100),
    marginBottom: hp(2),
  },
  profileImage: {
    width: wp(35),
    height: wp(35),
  },
  editIconContainer: {
    width: '25%',
    height: '25%',
    backgroundColor: Color.PRIMARY_COLOR,
    borderRadius: wp(100),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  editIconStyle: {
    width: wp(5),
    height: wp(5),
  },
  updateButtonStyle: {
    backgroundColor: Color.PRIMARY_COLOR,
    height: 45,
    width: 207,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  updateButtonTextStyle: {
    color: Color.WHITE,
    fontSize: 20,
    fontWeight: '700',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: wp(12),
  },
});
