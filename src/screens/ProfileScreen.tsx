import {
  FlatList,
  Image,
  ImageSourcePropType,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Color } from '../assets/styles/colors';
import CustomHeader from '../componets/CustomHeader';
import useCustomNavigation from '../hooks/useCustomNavigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

type ProfileOption = {
  id: number;
  icon: ImageSourcePropType;
  name: string;
  onPress?: () => void;
};

const ProfileScreen = () => {
  const navigation = useCustomNavigation('ProfileScreen');

  const profileListData = [
    {
      id: 1,
      icon: require('../assets/icons/profile_icon.png'),
      name: 'Profile',
      onPress: () => {
        navigation.navigate('EditProfileScreen');
      },
    },
    {
      id: 2,
      icon: require('../assets/icons/heart_icon.png'),
      name: 'Favorite',
      onPress: () => {},
    },
    {
      id: 3,
      icon: require('../assets/icons/payment_icon.png'),
      name: 'Payment Method',
      onPress: () => {},
    },
    {
      id: 4,
      icon: require('../assets/icons/privacy_icon.png'),
      name: 'Privacy Policy',
      onPress: () => {
        navigation.navigate('PrivacyPolicyScreen');
      },
    },
    {
      id: 5,
      icon: require('../assets/icons/setting_icon.png'),
      name: 'Settings',
      onPress: () => {
        navigation.navigate('SettingScreen');
      },
    },
    {
      id: 6,
      icon: require('../assets/icons/que_icon.png'),
      name: 'Help',
      onPress: () => {
        navigation.navigate('HelpCenterScreen');
      },
    },
    {
      id: 7,
      icon: require('../assets/icons/logout_icon.png'),
      name: 'Logout',
      onPress: () => {},
    },
  ];

  const renderProfileOption = ({ item }: { item: ProfileOption }) => (
    <TouchableOpacity style={styles.listContainer} onPress={item?.onPress}>
      <View style={styles.listIconContainer}>
        <Image
          source={item?.icon}
          style={styles.listIconStyle}
          resizeMode="contain"
          tintColor={Color.PRIMARY_COLOR}
        />
      </View>
      <Text style={styles.listTextStyle}>{item?.name}</Text>
      <View style={styles.forwardIconContainer}>
        {item?.id === 7 ? (
          <></>
        ) : (
          <Image
            source={require('../assets/icons/forward_icon.png')}
            style={styles.forwardIconStyle}
            resizeMode="contain"
          />
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={Color.STATUS_BAR_COLOR}
      />
      <CustomHeader title={'My Profile'} />
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
          <Text style={styles.profileNameTextStyle}>{'John Doe'}</Text>
        </View>
        <View style={styles.profileNameListContainer}>
          <FlatList
            data={profileListData}
            renderItem={renderProfileOption}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
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
  profileNameTextStyle: {
    fontSize: RFValue(18),
    fontWeight: '700',
  },
  profileNameListContainer: {
    flex: 1,
  },
  listContainer: {
    width: wp(100),
    height: hp(8),
    flexDirection: 'row',
    paddingHorizontal: wp(8),
    alignContent: 'space-between',
    alignItems: 'center',
  },
  listIconContainer: {
    height: wp(13),
    width: wp(13),
    backgroundColor: Color.SIGNUP_BUTTON_COLOR,
    borderRadius: wp(100),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(5),
  },
  listTextStyle: {
    fontSize: RFValue(15),
    color: Color.BLACK,
    fontWeight: '500',
  },
  listIconStyle: {
    width: wp(7),
    height: wp(7),
  },
  forwardIconStyle: {
    width: wp(4),
    height: wp(4),
  },
  forwardIconContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
