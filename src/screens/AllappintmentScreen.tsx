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
import CustomHeader from '../componets/CustomHeader';
import useCustomNavigation from '../hooks/useCustomNavigation';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CancelledAppointmentTab from '../componets/CancelledAppointmentTab';
import CompleteAppointmentTab from '../componets/CompleteAppointmentTab';
import UpcomingAppointmentTab from '../componets/UpcomingAppointmentTab';

const AllappintmentScreen = () => {
  const navigation = useCustomNavigation('AllappintmentScreen');
  const [isTabPressed, setIsTabPressed] = useState(1);
  const [favorites, setFavorites] = useState([1]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id],
    );
  };

  const tabName = [
    { id: 1, name: 'Complete' },
    { id: 2, name: 'Upcoming' },
    { id: 3, name: 'Cancelled' },
  ];

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
      <CustomHeader
        title={'All Appointment'}
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
      <View style={styles.tabView}>
        {tabName.map(item => {
          const isPressed = isTabPressed === item?.id;
          return (
            <TouchableOpacity
              style={[
                styles.tabContainer,
                {
                  backgroundColor: isPressed
                    ? Color?.PRIMARY_COLOR
                    : Color?.STATUS_BAR_COLOR,
                },
              ]}
              onPress={() => setIsTabPressed(item?.id)}
            >
              <Text
                style={{ color: isPressed ? Color.WHITE : Color.PRIMARY_COLOR }}
              >
                {item?.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {isTabPressed === 1 ? (
        <>
          {doctors.map(item => {
            return (
              <CompleteAppointmentTab
                avatar={item?.avatar}
                key={item?.id}
                name={item?.name}
                specialty={item?.specialty}
                rating={item?.rating}
                favIcon={
                  favorites.includes(item?.id)
                    ? require('../assets/icons/heart_fill_icon.png')
                    : require('../assets/icons/heart_icon.png')
                }
                reBookOnPress={() => {}}
                reviewOnPress={() => {
                  navigation.navigate('ReviewScreen', {
                    image: item?.avatar,
                    name: item?.name,
                    speciality: item?.specialty,
                  });
                }}
                favouriteButton={() => toggleFavorite(item?.id)}
              />
            );
          })}
        </>
      ) : isTabPressed === 2 ? (
        <>
          {doctors.map(item => {
            return (
              <UpcomingAppointmentTab
                avatar={item?.avatar}
                key={item?.id}
                name={item?.name}
                specialty={item?.specialty}
                rating={item?.rating}
                trueOnPress={() => {}}
                falseOnPress={() => {}}
                detailsOnPress={() => {
                  navigation.navigate('CancelAppointment');
                }}
              />
            );
          })}
        </>
      ) : (
        <>
          {doctors.map(item => {
            return (
              <CancelledAppointmentTab
                avatar={item?.avatar}
                key={item?.id}
                name={item?.name}
                specialty={item?.specialty}
                onPress={() =>
                  navigation.navigate('ReviewScreen', {
                    image: item?.avatar,
                    name: item?.name,
                    speciality: item?.specialty,
                  })
                }
              />
            );
          })}
        </>
      )}
    </View>
  );
};

export default AllappintmentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
  },
  backIconCountainerStyle: { height: '100%', justifyContent: 'center' },
  headerBackIconStyle: { height: wp(5), width: wp(10) },
  tabView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 15,
  },
  tabContainer: {
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
