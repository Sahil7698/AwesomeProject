import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Color } from '../assets/styles/colors';
import useCustomNavigation from '../hooks/useCustomNavigation';
import { RFValue } from 'react-native-responsive-fontsize';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const navigation = useCustomNavigation('HomeScreen');
  const styles = useStyles();
  const today = new Date();
  const [favorites, setFavorites] = useState([1]);
  const [activeDate, setActiveDate] = useState(false);
  const [isActiveDate, setIsActiveDate] = useState(today.getDate());
  const [activeDay, setActiveDay] = useState(
    today.toLocaleDateString('en-US', { weekday: 'long' }),
  );

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id],
    );
  };

  const getNextDays = () => {
    const daysArray = [];
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const today = new Date();

    for (let i = 0; i < 6; i++) {
      const nextDate = new Date();
      nextDate.setDate(today.getDate() + i);

      const dayNumber = nextDate.getDate();

      const weekday = nextDate
        .toLocaleDateString('en-US', { weekday: 'short' })
        .toUpperCase(); // MON, TUE...

      daysArray.push({
        day: dayNumber,
        weekday,
        isToday: i === 0,
      });
    }

    return daysArray;
  };

  const calendarDays = getNextDays();

  const doctors = [
    {
      id: 1,
      name: 'Dr. Olivia Turner, M.D.',
      specialty: 'Dermato-Endocrinology',
      rating: 5,
      reviews: 60,
      avatar: require('../assets/images/doctor_img.png'),
    },
    {
      id: 2,
      name: 'Dr. Alexander Bennett, Ph.D.',
      specialty: 'Dermato-Genetics',
      rating: 4.5,
      reviews: 40,
      avatar: require('../assets/images/doctor1.png'),
    },
    {
      id: 3,
      name: 'Dr. Sophia Martinez, Ph.D.',
      specialty: 'Cosmetic Bioengineering',
      rating: 5,
      reviews: 150,
      avatar: require('../assets/images/doctor2.png'),
    },
    {
      id: 4,
      name: 'Dr. Michael Davidson, M.D.',
      specialty: 'Nano-Dermatology',
      rating: 4.8,
      reviews: 90,
      avatar: require('../assets/images/doctor3.png'),
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={Color.STATUS_BAR_COLOR}
      />
      <View style={styles.topHeaderStyle}>
        <Image
          source={require('../assets/images/profile_img.png')}
          resizeMode="contain"
          style={styles.profileImageStyle}
        />
        <View style={styles.userDetailsContainer}>
          <View>
            <Text style={styles.greatingTextStyle}>{'Hi, WelcomeBack'}</Text>
            <Text style={styles.userNameTextStyle}>{'John Doe'}</Text>
          </View>
          <View style={styles.headerButtonContainer}>
            <TouchableOpacity
              style={styles.notificationButtonStyle}
              onPress={() =>
                navigation.navigate('HomeStack', {
                  screen: 'NotificationScreen',
                })
              }
            >
              <Image
                source={require('../assets/icons/notification_icon.png')}
                style={styles.notificationIconStyle}
                resizeMode="contain"
              />
              <View style={styles.notificationDotStyle} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingButtonStyle}>
              <Image
                source={require('../assets/icons/setting_icon.png')}
                style={styles.notificationIconStyle}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity
          style={styles.doctorsIconContainer}
          onPress={() =>
            navigation.navigate('HomeStack', {
              screen: 'DoctorsScreen',
            })
          }
        >
          <Image
            source={require('../assets/icons/doctor_icon.png')}
            style={styles.doctorIconStyle}
            resizeMode="contain"
          />
          <Text style={styles.doctorTextStyle}>{'Doctors'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.doctorsIconContainer}
          onPress={() =>
            navigation.navigate('HomeStack', {
              screen: 'DoctorsScreen',
              params: { type: 'fav' },
            })
          }
        >
          <Image
            source={require('../assets/icons/fav_icon.png')}
            style={styles.doctorIconStyle}
            resizeMode="contain"
          />
          <Text style={styles.doctorTextStyle}>{'Favourite'}</Text>
        </TouchableOpacity>
        <View style={styles.searchContainerStyle}>
          <View style={styles.filterContainerStyle}>
            <TouchableOpacity style={styles.sortIconContainer}>
              <Image
                source={require('../assets/icons/sort_icon.png')}
                resizeMode="contain"
                style={styles.sortIconStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.searchIconContainer}>
              <Image
                source={require('../assets/icons/search_icon.png')}
                resizeMode="contain"
                style={styles.sortIconStyle}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.calenderContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.daysScroll}
        >
          {calendarDays.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.dayCircle,
                isActiveDate === item.day && styles.dayCircleActive,
                isActiveDate === item.day && styles.dayCircleActiveAlt,
              ]}
              onPress={() => {
                setIsActiveDate(item.day);

                const fullDayName = new Date(
                  new Date().setDate(new Date().getDate() + index),
                ).toLocaleDateString('en-US', { weekday: 'long' });

                setActiveDay(fullDayName);

                setActiveDate(true);
              }}
            >
              <Text
                style={[
                  styles.dayNumber,
                  isActiveDate === item.day && styles.dayTextActive,
                ]}
              >
                {item.day}
              </Text>
              <Text
                style={[
                  styles.weekdayText,
                  isActiveDate === item.day && styles.dayTextActive,
                ]}
              >
                {item.weekday}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.agendaCard}>
          <Text
            style={styles.agendaDate}
          >{`${isActiveDate} ${activeDay} - Today`}</Text>
          <View style={styles.agendaLayout}>
            <View style={styles.timeLabels}>
              <Text style={styles.timeLabel}>9 AM</Text>
              <Text style={styles.timeLabel}>10 AM</Text>
              <Text style={styles.timeLabel}>11 AM</Text>
              <Text style={styles.timeLabel}>12 AM</Text>
            </View>
            <View style={styles.agendaMain}>
              <View style={styles.dashedLine} />
              {activeDate ? (
                <View style={styles.appointmentBlock}>
                  <Text style={styles.apptDoctorName}>
                    {'Dr. Olivia Turner, M.D.'}
                  </Text>
                  <View style={styles.apptActions}>
                    <TouchableOpacity style={styles.trueIconContainer}>
                      <Image
                        source={require('../assets/icons/right_icon.png')}
                        resizeMode="contain"
                        style={styles.trueIconStyle}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.trueIconContainer}>
                      <Image
                        source={require('../assets/icons/false_icon.png')}
                        resizeMode="contain"
                        style={styles.cancelIconStyle}
                      />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.apptSpecialty}>
                    {'Treatment and prevention of skin and photodermatitis.'}
                  </Text>
                </View>
              ) : (
                <></>
              )}
              <View style={styles.dashedLineBottom} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.doctorList}>
        <FlatList
          data={doctors}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollDoctorList}
          renderItem={({ item: doc }) => (
            <View style={styles.doctorCard}>
              <Image source={doc?.avatar} style={styles.doctorCardAvatar} />
              <View style={styles.doctorCardDetails}>
                <View style={styles.doctorDetailsContainer}>
                  <Text style={styles.doctorCardName}>{doc.name}</Text>
                  <Text style={styles.doctorCardSpecialty}>
                    {doc.specialty}
                  </Text>
                </View>

                <View style={styles.doctorCardStats}>
                  {/* Rating Item */}
                  <View style={styles.statItem}>
                    <Image
                      source={require('../assets/icons/fill_star_icon.png')}
                      style={styles.starIconStyle}
                      resizeMode="contain"
                    />
                    <Text style={styles.statText}>{doc.rating}</Text>
                  </View>

                  {/* Reviews Item */}
                  <View style={styles.statItem}>
                    <Image
                      source={require('../assets/icons/mag_icon.png')}
                      style={styles.starIconStyle}
                      resizeMode="contain"
                    />
                    <Text style={styles.statText}>{doc.reviews}</Text>
                  </View>

                  <View style={styles.cardActionIcons}>
                    <TouchableOpacity style={styles.cardIconSmall}>
                      <Image
                        source={require('../assets/icons/que_icon.png')}
                        style={styles.starIconStyle}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>

                    {/* Dynamic Favorite Button */}
                    <TouchableOpacity
                      style={styles.cardIconSmall}
                      onPress={() => toggleFavorite(doc.id)}
                    >
                      <Image
                        source={
                          favorites.includes(doc.id)
                            ? require('../assets/icons/heart_fill_icon.png')
                            : require('../assets/icons/heart_icon.png')
                        }
                        style={styles.starIconStyle}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const useStyles = () => {
  const edges = useSafeAreaInsets();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Color.WHITE,
    },
    bodyContainer: { backgroundColor: Color.WHITE, flex: 1 },
    headerBackIconStyle: { height: wp(10), width: wp(10) },
    backIconCountainerStyle: {
      height: '100%',
      justifyContent: 'center',
      marginLeft: 10,
    },
    topHeaderStyle: {
      height: RFValue(50),
      marginTop: edges.top,
      alignItems: 'center',
      paddingHorizontal: RFValue(22),
      flexDirection: 'row',
    },
    profileImageStyle: {
      height: wp(10),
      width: wp(10),
      marginRight: RFValue(10),
    },
    userDetailsContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    greatingTextStyle: { fontSize: RFValue(10), color: Color.PRIMARY_COLOR },
    userNameTextStyle: { fontSize: RFValue(10) },
    headerButtonContainer: { flexDirection: 'row' },
    notificationButtonStyle: {
      backgroundColor: Color.SIGNUP_BUTTON_COLOR,
      height: wp(7),
      width: wp(7),
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: RFValue(3),
    },
    notificationIconStyle: { height: wp(4.5), width: wp(4.5) },
    settingButtonStyle: {
      backgroundColor: Color.SIGNUP_BUTTON_COLOR,
      height: wp(7),
      width: wp(7),
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    searchContainer: {
      height: RFValue(45),
      flexDirection: 'row',
      paddingHorizontal: RFValue(22),
    },
    doctorsIconContainer: {
      width: wp(12),
      justifyContent: 'center',
      alignItems: 'center',
    },
    doctorIconStyle: { height: wp(5), width: wp(5) },
    doctorTextStyle: { color: Color.PRIMARY_COLOR, fontSize: RFValue(8) },
    searchContainerStyle: {
      flex: 1,
      marginLeft: RFValue(5),
      justifyContent: 'center',
      alignItems: 'center',
    },
    filterContainerStyle: {
      backgroundColor: Color.SIGNUP_BUTTON_COLOR,
      height: wp(8),
      width: '100%',
      borderRadius: 20,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: RFValue(3),
    },
    sortIconContainer: {
      height: wp(6),
      width: wp(6),
      backgroundColor: Color.WHITE,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    sortIconStyle: { height: wp(4), width: wp(4) },
    searchIconContainer: {
      height: wp(6),
      width: wp(6),
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: RFValue(3),
    },
    calenderContainer: {
      width: '100%',
      backgroundColor: Color.SIGNUP_BUTTON_COLOR,
      paddingHorizontal: RFValue(22),
      paddingVertical: 10,
    },
    daysScroll: {
      marginBottom: 10,
    },
    dayCircle: {
      width: 48,
      height: 50,
      borderRadius: 15,
      backgroundColor: Color.WHITE,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
      borderWidth: 1,
      borderColor: Color.WHITE,
    },
    dayCircleActive: {
      backgroundColor: Color.PRIMARY_COLOR,
      borderColor: Color.PRIMARY_COLOR,
    },
    dayCircleActiveAlt: {
      backgroundColor: Color.PRIMARY_COLOR,
      borderColor: Color.PRIMARY_COLOR,
    },
    dayNumber: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    weekdayText: {
      fontSize: 10,
      color: '#777',
    },
    dayTextActive: {
      color: Color.WHITE,
    },
    agendaCard: {
      backgroundColor: Color.WHITE,
      borderRadius: 20,
      padding: 10,
    },
    agendaDate: {
      fontSize: 12,
      color: Color.PRIMARY_COLOR,
      fontWeight: 'bold',
      textAlign: 'right',
    },
    agendaLayout: {
      flexDirection: 'row',
    },
    timeLabels: {
      marginRight: 10,
    },
    timeLabel: {
      fontSize: 10,
      color: Color.PRIMARY_COLOR,
      height: 25,
      textAlign: 'right',
    },
    agendaMain: {
      flex: 1,
      position: 'relative',
      paddingTop: 5,
    },
    dashedLine: {
      height: 1,
      borderWidth: 0.7,
      borderColor: Color.PRIMARY_COLOR,
      borderStyle: 'dashed',
      position: 'absolute',
      top: 6,
      left: 0,
      right: 0,
      zIndex: 1,
    },
    dashedLineBottom: {
      height: 1,
      borderWidth: 0.7,
      borderColor: '#D1D1D1',
      borderStyle: 'dashed',
      position: 'absolute',
      bottom: 16,
      left: 0,
      right: 0,
      zIndex: 1,
    },
    appointmentBlock: {
      backgroundColor: Color.SIGNUP_BUTTON_COLOR,
      borderRadius: 10,
      paddingHorizontal: 10,
      marginVertical: 8,
      paddingVertical: 6,
    },
    apptDoctorName: {
      fontSize: 13,
      fontWeight: 'bold',
      color: Color.PRIMARY_COLOR,
      width: '80%',
    },
    apptActions: {
      position: 'absolute',
      right: 10,
      top: 10,
      flexDirection: 'row',
      gap: 5,
    },
    apptSpecialty: {
      fontSize: 11,
      color: '#444',
      marginTop: 4,
    },
    trueIconContainer: {
      backgroundColor: Color.WHITE,
      height: wp(4),
      width: wp(4),
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    trueIconStyle: { height: wp(2), width: wp(2) },
    cancelIconStyle: { height: wp(1.5), width: wp(1.5) },
    doctorList: {
      paddingHorizontal: RFValue(22),
      marginTop: 10,
      backgroundColor: Color.WHITE,
      flex: 1,
    },
    doctorCard: {
      flexDirection: 'row',
      backgroundColor: Color.SIGNUP_BUTTON_COLOR,
      borderRadius: 20,
      paddingHorizontal: 10,
      marginBottom: 10,
      alignItems: 'center',
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      paddingVertical: 5,
    },
    doctorCardAvatar: {
      width: 70,
      height: 70,
      borderRadius: 40,
      marginRight: 15,
    },
    doctorCardDetails: {
      flex: 1,
    },
    doctorCardName: {
      fontSize: 14,
      fontWeight: 'bold',
      color: Color.PRIMARY_COLOR,
    },
    doctorCardSpecialty: {
      fontSize: 12,
      color: '#777',
    },
    doctorCardStats: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    statItem: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Color.WHITE,
      borderRadius: 12,
      paddingHorizontal: 8,
      paddingVertical: 3,
      marginRight: 8,
    },
    statText: {
      fontSize: 11,
      color: Color.PRIMARY_COLOR,
      marginLeft: 4,
      fontWeight: '600',
    },
    cardActionIcons: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      gap: 5,
    },
    cardIconSmall: {
      padding: 2,
      backgroundColor: Color.WHITE,
      height: wp(6),
      width: wp(6),
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    doctorDetailsContainer: {
      backgroundColor: Color.WHITE,
      paddingHorizontal: 10,
      borderRadius: 15,
      marginBottom: 5,
      paddingVertical: 5,
    },
    starIconStyle: { height: wp(3), width: wp(3) },
    scrollDoctorList: { paddingBottom: 80 },
    notificationDotStyle: {
      backgroundColor: Color.PRIMARY_COLOR,
      height: wp(1.5),
      width: wp(1.5),
      position: 'absolute',
      borderRadius: 5,
      right: 6,
      top: 6,
    },
  });
};
