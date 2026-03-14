import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Color } from '../assets/styles/colors';
import CustomHeader from '../componets/CustomHeader';
import useCustomNavigation from '../hooks/useCustomNavigation';
import { RFValue } from 'react-native-responsive-fontsize';

const PaymentScreen = () => {
  const navigation = useCustomNavigation('PaymentScreen');
  const handleSaveCard = () => {
    navigation.navigate('PaymentSuccessScreen');
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        translucent
        backgroundColor={Color.STATUS_BAR_COLOR}
      />
      <CustomHeader
        title={'Payment'}
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
      <View style={styles.bodyContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceTextStyle}>{'$ 100.00'}</Text>
        </View>
        <View style={styles.doctorDetailsContainer}>
          <View style={styles.doctorImageContainer}>
            <Image
              source={require('../assets/images/doctor_img.png')}
              style={styles.doctorImageStyle}
            />
          </View>
          <View style={styles.doctorInfoContainer}>
            <View style={styles.rowStyle}>
              <View style={styles.marginStyle}>
                <Text style={styles.doctorNameText}>
                  {'Dr. Olivia Turner, M.D.'}
                </Text>
                <Text style={styles.doctorDegreeText}>
                  {'Dermato-Endocrinology'}
                </Text>
              </View>
              <View style={styles.doctorTagContainer}>
                <Image
                  source={require('../assets/icons/doctor_tag_icon.png')}
                  resizeMode="contain"
                  style={styles.doctorTagIconStyle}
                />
              </View>
            </View>
            <View style={styles.ratingContainer}>
              <View style={styles.doctorRatingContainer}>
                <Image
                  source={require('../assets/icons/fill_star_icon.png')}
                  resizeMode="contain"
                  style={styles.starIconStyle}
                />
                <Text style={styles.ratingTextStyle}>{'5'}</Text>
              </View>
              <View style={styles.doctorRatingContainer}>
                <Image
                  source={require('../assets/icons/mag_icon.png')}
                  resizeMode="contain"
                  style={styles.starIconStyle}
                />
                <Text style={styles.ratingTextStyle}>{'60'}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.dateDetailsContainer}>
          <View style={styles.dateDeatilsStyle}>
            <Text style={{ color: Color.PRIMARY_COLOR }}>{'Date/Hour'}</Text>
            <Text style={styles.dateTextStyle}>
              {'Month 24, Year / 10:00 AM'}
            </Text>
          </View>
          <View style={styles.dateDeatilsStyle}>
            <Text style={{ color: Color.PRIMARY_COLOR }}>{'Duration'}</Text>
            <Text style={styles.dateTextStyle}>{'30 Minutes'}</Text>
          </View>
          <View style={styles.dateDeatilsStyle}>
            <Text style={{ color: Color.PRIMARY_COLOR }}>{'Booking for'}</Text>
            <Text style={styles.dateTextStyle}>{'Another Person'}</Text>
          </View>
        </View>
        <View style={styles.dateDetailsContainer}>
          <View style={styles.dateDeatilsStyle}>
            <Text style={{ color: Color.PRIMARY_COLOR }}>{'Amount'}</Text>
            <Text style={styles.dateTextStyle}>{'$ 100.00'}</Text>
          </View>
          <View style={styles.dateDeatilsStyle}>
            <Text style={{ color: Color.PRIMARY_COLOR }}>{'Duration'}</Text>
            <Text style={styles.dateTextStyle}>{'30 Minutes'}</Text>
          </View>
          <View style={styles.dateDeatilsStyle}>
            <Text style={{ color: Color.PRIMARY_COLOR }}>{'Total'}</Text>
            <Text style={styles.dateTextStyle}>{'$ 100.00'}</Text>
          </View>
        </View>
        <View style={styles.paymentMethodContainer}>
          <View style={styles.dateDeatilsStyle}>
            <Text style={{ color: Color.PRIMARY_COLOR }}>
              {'Payment Method'}
            </Text>
            <Text style={styles.dateTextStyle}>{'Card'}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.saveCardButtonStyle}
          onPress={handleSaveCard}
        >
          <Text style={styles.buttonText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
  },
  headerBackIconStyle: { height: wp(5), width: wp(10), tintColor: Color.WHITE },
  backIconCountainerStyle: { height: '100%', justifyContent: 'center' },
  bodyContainer: {
    backgroundColor: Color.WHITE,
    flex: 1,
  },
  priceContainer: {
    height: RFValue(110),
    backgroundColor: Color.PRIMARY_COLOR,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceTextStyle: {
    color: Color.WHITE,
    fontSize: RFValue(30),
    fontWeight: '700',
  },
  saveCardButtonStyle: {
    backgroundColor: Color.PRIMARY_COLOR,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    position: 'absolute',
    bottom: wp(15),
    paddingHorizontal: wp(20),
    alignSelf: 'center',
    width: '85%',
  },
  buttonText: {
    color: Color.WHITE,
    fontSize: RFValue(18),
    fontWeight: '700',
  },
  dateDetailsContainer: {
    height: RFValue(110),
    padding: RFValue(14),
    justifyContent: 'space-around',
    borderTopColor: Color.PRIMARY_COLOR,
    borderTopWidth: 1,
    width: '85%',
    alignSelf: 'center',
  },
  dateDeatilsStyle: { flexDirection: 'row', justifyContent: 'space-between' },
  dateTextStyle: { fontWeight: '600' },
  paymentMethodContainer: {
    height: RFValue(110),
    padding: RFValue(14),
    borderTopColor: Color.PRIMARY_COLOR,
    borderTopWidth: 1,
    width: '85%',
    alignSelf: 'center',
  },
  doctorImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doctorImageStyle: {
    height: RFValue(80),
    width: RFValue(80),
    borderRadius: 50,
  },
  doctorDetailsContainer: {
    height: RFValue(120),
    flexDirection: 'row',
    marginHorizontal: RFValue(14),
  },
  doctorNameText: {
    color: Color.PRIMARY_COLOR,
    fontSize: RFValue(14),
    fontWeight: '500',
  },
  doctorDegreeText: { fontSize: RFValue(10) },
  doctorRatingContainer: {
    height: 20,
    width: 40,
    borderRadius: 20,
    backgroundColor: Color.SIGNUP_BUTTON_COLOR,
    marginRight: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  starIconStyle: { height: 12, width: 12 },
  ratingTextStyle: { fontSize: RFValue(9) },
  ratingContainer: { flexDirection: 'row', marginTop: 10 },
  doctorTagIconStyle: { height: 15, width: 15 },
  doctorTagContainer: {
    height: 25,
    width: 25,
    borderRadius: 30,
    backgroundColor: Color.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowStyle: { flexDirection: 'row' },
  doctorInfoContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  marginStyle: { marginRight: 10 },
});
