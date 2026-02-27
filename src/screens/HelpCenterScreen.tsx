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
import React, { useState } from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Color } from '../assets/styles/colors';
import CustomHeader from '../componets/CustomHeader';
import useCustomNavigation from '../hooks/useCustomNavigation';
import { RFValue } from 'react-native-responsive-fontsize';
import CustomTextInput from '../componets/CustomTextInput';

type ContactOption = {
  id: number;
  icon: ImageSourcePropType;
  name: string;
  onPress?: () => void;
};

const HelpCenterScreen = () => {
  const navigation = useCustomNavigation('HelpCenterScreen');
  const [activeTab, setActiveTab] = useState(1);
  const [subActiveTab, setSubActiveTab] = useState(1);
  const [openFAQId, setOpenFAQId] = useState<number | null>(null);
  const firstTabData = [
    { id: 1, title: 'FAQ' },
    { id: 2, title: 'Contact Us' },
  ];

  const subTabData = [
    { id: 1, title: 'Popular Topic' },
    { id: 2, title: 'General' },
    { id: 3, title: 'Services' },
  ];

  const contactUsListData = [
    {
      id: 1,
      icon: require('../assets/icons/customer_icon.png'),
      name: 'Customer Service',
      onPress: () => {},
    },
    {
      id: 2,
      icon: require('../assets/icons/website_icon.png'),
      name: 'Website',
      onPress: () => {},
    },
    {
      id: 3,
      icon: require('../assets/icons/whatsapp_icon.png'),
      name: 'Whatsapp',
      onPress: () => {},
    },
    {
      id: 4,
      icon: require('../assets/icons/facebook_icon.png'),
      name: 'Facebook',
      onPress: () => {},
    },
    {
      id: 5,
      icon: require('../assets/icons/insta_icon.png'),
      name: 'Instagram',
      onPress: () => {},
    },
  ];

  const faqData = [
    {
      id: 1,
      question: 'Contact Us',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam.',
    },
    {
      id: 2,
      question: 'How to book a service?',
      answer:
        'You can book a service directly from the services page by selecting your desired option.',
    },
    {
      id: 3,
      question: 'How to cancel a booking?',
      answer:
        'Go to your bookings section and select cancel for the respective service.',
    },
  ];

  const renderContactOption = ({ item }: { item: ContactOption }) => (
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
          tintColor={Color.PRIMARY_COLOR}
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
        title={'Help Center'}
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
        viewStyle={{ backgroundColor: Color.PRIMARY_COLOR }}
        titleStyle={{ color: Color.WHITE }}
      />
      <View style={styles.subContainer}>
        <View style={styles.searchContainer}>
          <Text style={styles.howcanTextStyle}>{'How Can We Halp You?'}</Text>
          <CustomTextInput
            viewStyle={styles.searchBoxStyle}
            placeholder="Search..."
            leftButtonComponent={
              <View style={styles.searchIconContainer}>
                <Image
                  source={require('../assets/icons/search_icon.png')}
                  style={styles.searchIconStyle}
                  resizeMode="contain"
                />
              </View>
            }
          />
        </View>
        <View style={styles.firstTabWrapper}>
          {firstTabData.map(item => {
            const isActive = activeTab === item.id;
            return (
              <TouchableOpacity
                style={[
                  styles.firstTabSelectStyle,
                  {
                    backgroundColor: isActive
                      ? Color.PRIMARY_COLOR
                      : Color.SIGNUP_BUTTON_COLOR,
                  },
                ]}
                onPress={() => setActiveTab(item.id)}
              >
                <Text
                  style={[
                    styles.firstTabTextStyle,
                    { color: isActive ? Color.WHITE : Color.PRIMARY_COLOR },
                  ]}
                >
                  {item?.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.contentContainer}>
          {activeTab === 1 ? (
            <>
              <View style={styles.firstTabWrapper}>
                {subTabData.map(item => {
                  const isSubActive = subActiveTab === item?.id;
                  return (
                    <TouchableOpacity
                      key={item?.id}
                      style={[
                        styles.subTabSelectStyle,
                        {
                          backgroundColor: isSubActive
                            ? Color.PRIMARY_COLOR
                            : Color.SIGNUP_BUTTON_COLOR,
                        },
                      ]}
                      onPress={() => setSubActiveTab(item.id)}
                    >
                      <Text
                        style={[
                          styles.subTabTextStyle,
                          {
                            color: isSubActive
                              ? Color.WHITE
                              : Color.PRIMARY_COLOR,
                          },
                        ]}
                      >
                        {item?.title}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
              <View>
                {subActiveTab === 1 ? (
                  <>
                    {faqData.map(item => {
                      const isOpen = openFAQId === item?.id;
                      return (
                        <>
                          <TouchableOpacity
                            key={item?.id}
                            style={styles.popularContainer}
                            onPress={() =>
                              setOpenFAQId(isOpen ? null : item.id)
                            }
                          >
                            <Text style={{ fontSize: RFValue(12) }}>
                              {item?.question}
                            </Text>
                            <Image
                              source={
                                !isOpen
                                  ? require('../assets/icons/forward_icon.png')
                                  : require('../assets/icons/down_arrow_icon.png')
                              }
                              style={styles.forwardIconStyle}
                              resizeMode="contain"
                              tintColor={Color.PRIMARY_COLOR}
                            />
                          </TouchableOpacity>
                          {isOpen && (
                            <View
                              style={{
                                marginVertical: wp(3),
                                marginHorizontal: wp(4),
                              }}
                            >
                              <Text>{item?.answer}</Text>
                            </View>
                          )}
                        </>
                      );
                    })}
                  </>
                ) : subActiveTab === 2 ? (
                  <Text style={{ textAlign: 'center', marginTop: 10 }}>
                    Contact Us
                  </Text>
                ) : (
                  <Text style={{ textAlign: 'center', marginTop: 10 }}>
                    Form goes here
                  </Text>
                )}
              </View>
            </>
          ) : (
            <FlatList
              data={contactUsListData}
              renderItem={renderContactOption}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default HelpCenterScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  backIconCountainerStyle: {
    height: '100%',
    justifyContent: 'center',
  },
  headerBackIconStyle: { height: wp(5), width: wp(10), tintColor: Color.WHITE },
  subContainer: {
    flex: 1,
    backgroundColor: Color.WHITE,
  },
  searchContainer: {
    width: wp(100),
    height: hp(15),
    alignItems: 'center',
    backgroundColor: Color.PRIMARY_COLOR,
    paddingVertical: wp(2),
  },
  howcanTextStyle: { color: Color.WHITE, fontSize: RFValue(13) },
  searchBoxStyle: {
    width: '85%',
    borderRadius: RFValue(20),
    marginTop: RFValue(-2),
  },
  searchIconContainer: {
    height: hp(6),
    width: wp(9),
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIconStyle: { height: wp(6), width: wp(6) },
  firstTabSelectStyle: {
    backgroundColor: Color.PRIMARY_COLOR,
    height: hp(5.5),
    width: wp('40%'),
    marginVertical: wp(4),
    borderRadius: 25,
    marginRight: wp(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstTabTextStyle: { color: Color.WHITE, fontSize: RFValue(17) },
  contentContainer: {
    flex: 1,
    paddingHorizontal: wp(6),
  },
  firstTabWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subTabSelectStyle: {
    backgroundColor: Color.PRIMARY_COLOR,
    height: hp(4),
    width: wp('28%'),
    marginVertical: wp(1),
    borderRadius: 25,
    marginRight: wp(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  subTabTextStyle: { color: Color.WHITE, fontSize: RFValue(12) },
  listContainer: {
    height: hp(8),
    flexDirection: 'row',
    paddingTop: wp(8),
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
  popularContainer: {
    backgroundColor: Color.STATUS_BAR_COLOR,
    height: hp(4.5),
    marginTop: wp(4),
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
  },
});
