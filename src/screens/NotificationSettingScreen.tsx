import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { Color } from '../assets/styles/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomHeader from '../componets/CustomHeader';
import useCustomNavigation from '../hooks/useCustomNavigation';
import ToggleSwitch from 'toggle-switch-react-native';

type NotificationOption = {
  id: number;
  name: string;
};

const NotificationSettingScreen = () => {
  const navigation = useCustomNavigation('NotificationSettingScreen');
  const [toggleStates, setToggleStates] = useState<{ [key: number]: boolean }>({
    1: true, // Example: General Notification starts ON
  });
  const notificationListData = [
    {
      id: 1,
      name: 'General Notification',
    },
    {
      id: 2,
      name: 'Sound',
    },
    {
      id: 3,
      name: 'Sound Call',
    },
    {
      id: 4,
      name: 'Vibrate',
    },
    {
      id: 5,
      name: 'Special Offers',
    },
    {
      id: 6,
      name: 'Payments',
    },
    {
      id: 7,
      name: 'Promo And Discount',
    },
    {
      id: 8,
      name: 'Cashback',
    },
  ];

  const handleToggle = (id: number) => {
    setToggleStates(prevState => ({
      ...prevState,
      [id]: !prevState[id], // Flips the specific boolean for this ID
    }));
  };

  const renderNotificationOption = ({ item }: { item: NotificationOption }) => (
    <View style={styles.listContainer}>
      <Text style={styles.listTextStyle}>{item?.name}</Text>
      <View style={styles.forwardIconContainer}>
        <ToggleSwitch
          isOn={!!toggleStates[item.id]}
          onColor="#CAD6FF"
          offColor="#2260FF"
          size="medium"
          onToggle={() => handleToggle(item.id)}
        />
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={Color.STATUS_BAR_COLOR}
      />
      <CustomHeader
        title={'Notification Setting'}
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
          data={notificationListData}
          renderItem={renderNotificationOption}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default NotificationSettingScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  backIconCountainerStyle: { height: '100%', justifyContent: 'center' },
  headerBackIconStyle: { height: wp(5), width: wp(10) },
  settingNameListContainer: {
    flex: 1,
    paddingHorizontal: wp(4),
    backgroundColor: Color.WHITE,
    paddingTop: wp(3),
  },
  listContainer: {
    height: hp(8),
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(4),
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
