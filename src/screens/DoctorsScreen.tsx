import {
  FlatList,
  Image,
  ListRenderItem,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { Color } from '../assets/styles/colors';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomHeader from '../componets/CustomHeader';
import useCustomNavigation from '../hooks/useCustomNavigation';
import { RFValue } from 'react-native-responsive-fontsize';

type Doctor = {
  id: number;
  name: string;
  specialty: string;
  avatar: any; // or ImageSourcePropType (better)
  gender: 'Male' | 'Female';
  rating: number;
};

const DoctorsScreen = () => {
  const navigation = useCustomNavigation('DoctorsScreen');
  const [sortData, setSortData] = useState(1);
  const [favorites, setFavorites] = useState([1]);
  const [infoButtonPressed, setInfoButtonpressed] = useState(false);
  const [favButtonPressed, setFavButtonPressed] = useState(false);

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id],
    );
  };

  const sortDataList = [
    { id: 1, name: 'A->Z' },
    {
      id: 2,
      icon: favButtonPressed
        ? require('../assets/icons/fill_star_icon.png')
        : require('../assets/icons/star_icon.png'),
    },
    {
      id: 3,
      icon: require('../assets/icons/heart_icon.png'),
    },
    { id: 4, icon: require('../assets/icons/women_icon.png') },
    { id: 5, icon: require('../assets/icons/men_icon.png') },
  ];

  const doctors: Doctor[] = [
    {
      id: 1,
      name: 'Dr. Olivia Turner, M.D.',
      specialty: 'Dermato-Endocrinology',
      avatar: require('../assets/images/doctor_img.png'),
      gender: 'Female',
      rating: 5,
    },
    {
      id: 2,
      name: 'Dr. Alexander Bennett, Ph.D.',
      specialty: 'Dermato-Genetics',
      avatar: require('../assets/images/doctor1.png'),
      gender: 'Male',
      rating: 5,
    },
    {
      id: 3,
      name: 'Dr. Sophia Martinez, Ph.D.',
      specialty: 'Cosmetic Bioengineering',
      avatar: require('../assets/images/doctor2.png'),
      gender: 'Female',
      rating: 4.9,
    },
    {
      id: 4,
      name: 'Dr. Michael Davidson, M.D.',
      specialty: 'Nano-Dermatology',
      avatar: require('../assets/images/doctor3.png'),
      gender: 'Male',
      rating: 4.8,
    },
  ];

  const renderDoctorItem: ListRenderItem<Doctor> = ({ item: doc }) => {
    return (
      <View style={styles.doctorDetailsContainer}>
        <Image source={doc?.avatar} style={styles.doctorProfileImage} />
        <View style={styles.doctorNameContainer}>
          <Text style={styles.doctorNameText}>{doc?.name}</Text>
          <Text>{doc?.specialty}</Text>

          <View style={styles.infoContainer}>
            <TouchableOpacity
              style={styles.infoButtonStyle}
              onPress={() => setInfoButtonpressed(prev => !prev)}
            >
              <Text style={styles.infoTextStyle}>Info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.favButtonStyle}>
              <Image
                source={require('../assets/icons/schedule_icon.png')}
                style={styles.iconStyle}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.favButtonStyle}>
              <Image
                source={require('../assets/icons/info_icon.png')}
                style={styles.iconStyle}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.favButtonStyle}>
              <Image
                source={require('../assets/icons/que_icon.png')}
                style={styles.iconStyle}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.favButtonStyle}
              onPress={() => toggleFavorite(doc.id)}
            >
              <Image
                source={
                  favorites.includes(doc?.id)
                    ? require('../assets/icons/heart_fill_icon.png')
                    : require('../assets/icons/heart_icon.png')
                }
                style={styles.iconStyle}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const renderFavDoctorItem: ListRenderItem<Doctor> = ({ item: doc }) => {
    return (
      <View style={styles.ratingDoctorDetailsContainer}>
        <Image source={doc?.avatar} style={styles.ratingDoctorProfileImage} />
        <View style={styles.ratingDoctorNameContainer}>
          <View style={styles.proContainer}>
            <View style={styles.ratingDoctorTagIconContainer}>
              <Image
                source={require('../assets/icons/doctor_tag_icon.png')}
                style={styles.ratingDoctorTagIconStyle}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.proDoctorText}>{'Professional Doctor'}</Text>
            <View style={styles.ratingStarIconContainer}>
              <Image
                source={require('../assets/icons/fill_star_icon.png')}
                resizeMode="contain"
                style={styles.starIconStyle}
              />
              <Text>{doc?.rating}</Text>
            </View>
          </View>
          <View style={styles.ratingNameContainer}>
            <Text style={styles.doctorNameText}>{doc?.name}</Text>
            <Text>{doc?.specialty}</Text>
          </View>
          <View style={styles.ratingInfoContainer}>
            <TouchableOpacity
              style={styles.infoButtonStyle}
              onPress={() => setInfoButtonpressed(prev => !prev)}
            >
              <Text style={styles.infoTextStyle}>Info</Text>
            </TouchableOpacity>
            <View style={styles.ratingInfoIconContainer}>
              <TouchableOpacity style={styles.favButtonStyle}>
                <Image
                  source={require('../assets/icons/schedule_icon.png')}
                  style={styles.iconStyle}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.favButtonStyle}>
                <Image
                  source={require('../assets/icons/info_icon.png')}
                  style={styles.iconStyle}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.favButtonStyle}>
                <Image
                  source={require('../assets/icons/que_icon.png')}
                  style={styles.iconStyle}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.favButtonStyle}
                onPress={() => toggleFavorite(doc.id)}
              >
                <Image
                  source={
                    favorites.includes(doc?.id)
                      ? require('../assets/icons/heart_fill_icon.png')
                      : require('../assets/icons/heart_icon.png')
                  }
                  style={styles.iconStyle}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={Color.STATUS_BAR_COLOR}
      />
      <CustomHeader
        title={
          infoButtonPressed
            ? 'Doctor Info'
            : favButtonPressed
            ? 'Rating'
            : 'Doctors'
        }
        headerLeftComponent={
          <TouchableOpacity
            style={styles.backIconCountainerStyle}
            onPress={() => {
              infoButtonPressed
                ? setInfoButtonpressed(!infoButtonPressed)
                : favButtonPressed
                ? setFavButtonPressed(!favButtonPressed)
                : navigation.goBack();
              setSortData(1);
            }}
          >
            <Image
              source={require('../assets/icons/back_icon.png')}
              style={styles.headerBackIconStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
        }
        headerRightComponent={
          <View style={styles.headerRightContainer}>
            <TouchableOpacity style={styles.searchIconContainer}>
              <Image
                source={require('../assets/icons/search_icon.png')}
                resizeMode="contain"
                style={styles.searchIconStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.searchIconContainer}>
              <Image
                source={require('../assets/icons/sort_icon.png')}
                resizeMode="contain"
                style={styles.searchIconStyle}
              />
            </TouchableOpacity>
          </View>
        }
      />
      <View style={styles.bodyContainer}>
        <View style={styles.sortContainer}>
          <Text>{'Sort By'}</Text>
          {sortDataList?.map(item => {
            const isSortButton = sortData === item?.id;
            return (
              <>
                {item?.name ? (
                  <TouchableOpacity
                    key={item?.id}
                    style={[
                      styles.letterWiseContainer,
                      {
                        backgroundColor: isSortButton
                          ? Color.PRIMARY_COLOR
                          : Color.SIGNUP_BUTTON_COLOR,
                      },
                    ]}
                    onPress={() => {
                      setSortData(item?.id);
                      item?.id === 1 && setFavButtonPressed(false);
                    }}
                  >
                    <Text
                      style={[
                        styles.letterTextStyle,
                        {
                          color: isSortButton
                            ? Color.WHITE
                            : Color.PRIMARY_COLOR,
                        },
                      ]}
                    >
                      {item?.name}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    key={item?.id}
                    style={[
                      styles.sortWiseContainer,
                      {
                        backgroundColor: isSortButton
                          ? Color.PRIMARY_COLOR
                          : Color.SIGNUP_BUTTON_COLOR,
                      },
                    ]}
                    onPress={() => {
                      setSortData(item?.id);
                      item?.id === 2
                        ? setFavButtonPressed(true)
                        : setFavButtonPressed(false);
                      setInfoButtonpressed(false);
                    }}
                  >
                    <Image
                      source={item?.icon}
                      resizeMode="contain"
                      style={[
                        styles.sortIconStyle,
                        {
                          tintColor: isSortButton
                            ? Color.WHITE
                            : Color.PRIMARY_COLOR,
                        },
                      ]}
                    />
                  </TouchableOpacity>
                )}
              </>
            );
          })}
        </View>
        {infoButtonPressed ? (
          <View>
            <View style={styles.doctorInfoContainer}>
              <View style={styles.doctorImageContainer}>
                <Image
                  source={require('../assets/images/doctor1.png')}
                  resizeMode="contain"
                  style={styles.infoDoctorImageStyle}
                />
                <View>
                  <View style={styles.expContainerStyle}>
                    <View style={styles.doctorTagIconStyle}>
                      <Image
                        source={require('../assets/icons/doctor_tag_icon.png')}
                        resizeMode="contain"
                        style={styles.doctorTagIcon}
                      />
                    </View>
                    <View>
                      <Text style={styles.yearTextStyle}>{'15 Years'}</Text>
                      <Text
                        style={{ color: Color.WHITE, fontSize: RFValue(10) }}
                      >
                        {'experience'}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.focusContainer}>
                    <Text style={styles.focusFontStyle}>
                      {
                        'Focus: The impact of hormonal imbalances on skin conditions, specializing in acne, hirsutism, and other skin disorders.'
                      }
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.doctorInfoNameContainer}>
                <Text style={styles.infoDoctorNameText}>
                  {'Dr. Alexander Bennett, Ph.D.'}
                </Text>
                <Text style={styles.infoDoctorSpecialistText}>
                  {'Dermato-Genetics'}
                </Text>
              </View>
              <View style={styles.infoDoctorTimeContainer}>
                <View style={styles.starIconContainer}>
                  <Image
                    source={require('../assets/icons/fill_star_icon.png')}
                    resizeMode="contain"
                    style={styles.starIconStyle}
                  />
                  <Text>{'5'}</Text>
                </View>
                <View style={styles.starIconContainer}>
                  <Image
                    source={require('../assets/icons/mag_icon.png')}
                    resizeMode="contain"
                    style={styles.starIconStyle}
                  />
                  <Text>{'40'}</Text>
                </View>
                <View style={styles.timeContainer}>
                  <Image
                    source={require('../assets/icons/clock_icon.png')}
                    resizeMode="contain"
                    style={styles.starIconStyle}
                  />
                  <Text style={styles.infoDoctorTimeText}>
                    {'Mon-Sat / 9:00AM - 5:00PM'}
                  </Text>
                </View>
              </View>
              <View style={styles.scheduleContainer}>
                <View style={styles.scheduleIconContainer}>
                  <Image
                    source={require('../assets/icons/schedule_icon.png')}
                    resizeMode="contain"
                    style={styles.scheduleIconStyle}
                  />
                  <Text style={styles.scheduleTextStyle}>{'Schedule'}</Text>
                </View>
                <View style={styles.infoScheduleIconContainer}>
                  <TouchableOpacity style={styles.favButtonStyle}>
                    <Image
                      source={require('../assets/icons/info_icon.png')}
                      style={styles.iconStyle}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.favButtonStyle}>
                    <Image
                      source={require('../assets/icons/que_icon.png')}
                      style={styles.iconStyle}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.favButtonStyle}>
                    <Image
                      source={require('../assets/icons/star_icon.png')}
                      style={styles.iconStyle}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.favButtonStyle}
                    // onPress={() => toggleFavorite(doc.id)}
                  >
                    <Image
                      source={require('../assets/icons/heart_icon.png')}
                      style={styles.iconStyle}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <Text style={styles.profileText}>{'Profile'}</Text>
            <Text style={styles.profileSubText}>
              {
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              }
            </Text>
            <Text style={styles.profileText}>{'Carrer Path'}</Text>
            <Text style={styles.profileSubText}>
              {
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              }
            </Text>
            <Text style={styles.profileText}>{'Highlights'}</Text>
            <Text style={styles.profileSubText}>
              {
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              }
            </Text>
          </View>
        ) : (
          <FlatList
            data={doctors}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollDoctorList}
            style={styles.doctorScrollList}
            renderItem={
              favButtonPressed ? renderFavDoctorItem : renderDoctorItem
            }
          />
        )}
      </View>
    </View>
  );
};

export default DoctorsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
  },
  backIconCountainerStyle: { height: '100%', justifyContent: 'center' },
  headerBackIconStyle: { height: wp(5), width: wp(10) },
  searchIconContainer: {
    height: wp(8),
    width: wp(8),
    backgroundColor: Color.SIGNUP_BUTTON_COLOR,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  searchIconStyle: {
    height: wp(5),
    width: wp(5),
    tintColor: Color.PRIMARY_COLOR,
  },
  headerRightContainer: { flexDirection: 'row' },
  bodyContainer: {
    backgroundColor: Color.WHITE,
    flex: 1,
    paddingHorizontal: RFValue(22),
  },
  sortContainer: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
  letterWiseContainer: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.PRIMARY_COLOR,
    borderRadius: 20,
    paddingVertical: 4,
    marginLeft: 5,
  },
  letterTextStyle: { color: Color.WHITE },
  sortWiseContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.PRIMARY_COLOR,
    borderRadius: 30,
    padding: 6,
    marginLeft: 5,
  },
  sortIconStyle: {
    height: wp(4),
    width: wp(4),
  },
  doctorDetailsContainer: {
    backgroundColor: Color.SIGNUP_BUTTON_COLOR,
    borderRadius: 20,
    padding: 12,
    marginTop: 15,
    flexDirection: 'row',
  },
  doctorProfileImage: { borderRadius: 130, height: wp(30), width: wp(30) },
  doctorNameContainer: { marginLeft: 10, justifyContent: 'center' },
  doctorNameText: { color: Color.PRIMARY_COLOR, fontWeight: '600' },
  infoContainer: { flexDirection: 'row', marginTop: 15 },
  infoButtonStyle: {
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 3,
    backgroundColor: Color.PRIMARY_COLOR,
    marginRight: wp(3),
  },
  infoTextStyle: { color: Color.WHITE },
  favButtonStyle: {
    borderRadius: 35,
    backgroundColor: Color.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    height: wp(6),
    width: wp(6),
    marginRight: wp(0.5),
  },
  scrollDoctorList: { paddingBottom: wp(25) },
  doctorScrollList: { marginTop: 10 },
  iconStyle: {
    height: wp(3),
    width: wp(3),
    tintColor: Color.PRIMARY_COLOR,
  },
  doctorInfoContainer: {
    backgroundColor: Color.SIGNUP_BUTTON_COLOR,
    padding: wp(5),
    marginTop: wp(5),
    borderRadius: 20,
  },
  doctorImageContainer: { flexDirection: 'row' },
  infoDoctorImageStyle: { width: wp(40), height: wp(40), borderRadius: 80 },
  expContainerStyle: {
    backgroundColor: Color.PRIMARY_COLOR,
    height: wp(10),
    alignItems: 'center',
    borderRadius: 20,
    width: wp(35),
    flexDirection: 'row',
    marginLeft: 8,
  },
  doctorTagIconStyle: {
    height: wp(8),
    width: wp(8),
    backgroundColor: Color.SIGNUP_BUTTON_COLOR,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
    marginRight: 6,
  },
  doctorTagIcon: {
    height: wp(5),
    width: wp(5),
    tintColor: Color.PRIMARY_COLOR,
  },
  yearTextStyle: {
    color: Color.WHITE,
    lineHeight: 10,
    fontSize: RFValue(11),
  },
  focusContainer: {
    backgroundColor: Color.PRIMARY_COLOR,
    height: wp(29),
    alignItems: 'center',
    borderRadius: 20,
    width: wp(35),
    marginTop: 5,
    marginLeft: 8,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  focusFontStyle: { color: Color.WHITE, fontSize: RFValue(10) },
  doctorInfoNameContainer: {
    backgroundColor: Color.WHITE,
    height: wp(15),
    borderRadius: 20,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoDoctorNameText: {
    color: Color.PRIMARY_COLOR,
    fontSize: RFValue(14),
    fontWeight: 600,
  },
  infoDoctorSpecialistText: {
    fontSize: RFValue(13),
  },
  starIconContainer: {
    width: wp(13),
    height: wp(6),
    backgroundColor: Color.WHITE,
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 5,
    justifyContent: 'space-evenly',
    marginRight: 4,
  },
  starIconStyle: {
    height: wp(4),
    width: wp(4),
    tintColor: Color.PRIMARY_COLOR,
  },
  infoDoctorTimeContainer: { flexDirection: 'row', alignItems: 'center' },
  timeContainer: {
    width: wp(48),
    height: wp(6),
    backgroundColor: Color.WHITE,
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 5,
    justifyContent: 'space-evenly',
    marginRight: 4,
  },
  infoDoctorTimeText: { fontSize: RFValue(10) },
  scheduleIconContainer: {
    height: wp(6),
    width: wp(30),
    backgroundColor: Color.PRIMARY_COLOR,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  scheduleIconStyle: { height: wp(4), width: wp(4), marginRight: 5 },
  scheduleTextStyle: { color: Color.WHITE },
  scheduleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  infoScheduleIconContainer: { flexDirection: 'row', alignItems: 'center' },
  profileText: {
    marginTop: 30,
    color: Color.PRIMARY_COLOR,
    fontSize: RFValue(13),
    fontWeight: 500,
  },
  profileSubText: {
    fontSize: RFValue(10),
  },
  ratingDoctorProfileImage: {
    borderRadius: 120,
    height: wp(25),
    width: wp(25),
  },
  ratingDoctorDetailsContainer: {
    backgroundColor: Color.SIGNUP_BUTTON_COLOR,
    borderRadius: 20,
    padding: 12,
    marginTop: 15,
    flexDirection: 'row',
  },
  ratingDoctorNameContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1,
  },
  ratingNameContainer: {
    backgroundColor: Color.WHITE,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  ratingInfoContainer: {
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'space-between',
  },
  ratingInfoIconContainer: { flexDirection: 'row' },
  ratingDoctorTagIconContainer: {
    backgroundColor: Color.PRIMARY_COLOR,
    height: wp(5),
    width: wp(5),
    borderRadius: 10,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  ratingDoctorTagIconStyle: { height: wp(4), width: wp(4) },
  proDoctorText: {
    fontSize: RFValue(10),
    textAlign: 'center',
    color: Color.PRIMARY_COLOR,
  },
  proContainer: { flexDirection: 'row' },
  ratingStarIconContainer: {
    width: wp(12),
    height: wp(5),
    backgroundColor: Color.WHITE,
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 5,
    justifyContent: 'space-evenly',
    marginRight: 4,
    marginLeft: wp(7),
  },
  ratingStarIconStyle: {
    height: wp(4),
    width: wp(4),
    tintColor: Color.PRIMARY_COLOR,
  },
});
