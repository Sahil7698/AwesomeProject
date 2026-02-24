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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Color } from '../assets/styles/colors';
import CustomHeader from '../componets/CustomHeader';
import useCustomNavigation from '../hooks/useCustomNavigation';
import { RFValue } from 'react-native-responsive-fontsize';

type SettingOption = {
  id: number;
  icon: ImageSourcePropType;
  name: string;
  onPress?: () => void;
};

const SettingScreen = () => {
  const navigation = useCustomNavigation('SettingScreen');

  const settingListData = [
    {
      id: 1,
      icon: require('../assets/icons/notification_stg_icon.png'),
      name: 'Notification Setting',
      onPress: () => {
        navigation.navigate('NotificationSettingScreen');
      },
    },
    {
      id: 2,
      icon: require('../assets/icons/manage_password_icon.png'),
      name: 'Password Manager',
      onPress: () => {
        navigation.navigate('PasswordManagerScreen');
      },
    },
    {
      id: 3,
      icon: require('../assets/icons/profile_icon.png'),
      name: 'Delete Account',
      onPress: () => {},
    },
  ];

  const renderSettingOption = ({ item }: { item: SettingOption }) => (
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
        <Image
          source={require('../assets/icons/forward_icon.png')}
          style={styles.forwardIconStyle}
          resizeMode="contain"
        />
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
      <CustomHeader
        title={'Settings'}
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
      <View style={styles.settingNameListContainer}>
        <FlatList
          data={settingListData}
          renderItem={renderSettingOption}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  backIconCountainerStyle: { height: '100%', justifyContent: 'center' },
  headerBackIconStyle: { height: wp(5), width: wp(10) },
  settingNameListContainer: {
    flex: 1,
    paddingHorizontal: wp(4),
    backgroundColor: Color.WHITE,
    paddingTop: wp(7),
  },
  listContainer: {
    height: hp(8),
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'center',
  },
  listIconContainer: {
    height: wp(13),
    width: wp(13),
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
    tintColor: Color.PRIMARY_COLOR,
  },
  forwardIconContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
