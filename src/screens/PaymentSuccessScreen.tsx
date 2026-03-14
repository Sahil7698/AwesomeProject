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

const PaymentSuccessScreen = () => {
  const navigation = useCustomNavigation('PaymentSuccessScreen');
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        translucent
        backgroundColor={Color.WHITE}
      />
      <CustomHeader
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
      />
      <View style={styles.bodyContainer}>
        <Image
          source={require('../assets/icons/payment_success_icon.png')}
          resizeMode="contain"
          style={styles.successIconStyle}
        />
        <Text style={styles.congraTextstyle}>{'Congratulation'}</Text>
        <Text style={styles.successPaymentTextStyle}>
          {'Payment is Suceessfully'}
        </Text>
        <View style={styles.paymentDetailContainer}>
          <Text style={styles.bookedTextStyle}>
            {'You have successfully booked an appointment with'}
          </Text>
          <Text style={styles.doctorDetailTextStyle}>
            {'Dr. Olivia Turner, M.D.'}
          </Text>
          <View style={styles.dateContainer}>
            <Image
              source={require('../assets/icons/schedule_icon.png')}
              style={styles.clockIconStyle}
              resizeMode="contain"
            />
            <Text style={styles.dateTextStyle}>{'Month 24, Year'}</Text>
            <Image
              source={require('../assets/icons/clock_icon.png')}
              style={styles.clockIconStyle}
              resizeMode="contain"
            />
            <Text style={styles.dateTextStyle}>{'10:00 AM'}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PaymentSuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
  },
  headerBackIconStyle: { height: wp(5), width: wp(10), tintColor: Color.WHITE },
  backIconCountainerStyle: { height: '100%', justifyContent: 'center' },
  bodyContainer: {
    backgroundColor: Color.PRIMARY_COLOR,
    flex: 1,
    paddingHorizontal: RFValue(24),
    paddingTop: RFValue(18),
    justifyContent: 'center',
    alignItems: 'center',
  },
  successIconStyle: { height: '27%', width: '50%' },
  congraTextstyle: {
    color: Color.WHITE,
    fontSize: RFValue(25),
    fontWeight: '600',
  },
  paymentDetailContainer: {
    marginVertical: 50,
    width: '80%',
    borderColor: Color.WHITE,
    borderWidth: 1,
    borderRadius: 15,
    padding: 20,
  },
  successPaymentTextStyle: { color: Color.WHITE, fontSize: RFValue(15) },
  bookedTextStyle: {
    textAlign: 'center',
    color: Color.WHITE,
    fontWeight: '300',
  },
  doctorDetailTextStyle: {
    textAlign: 'center',
    color: Color.WHITE,
    fontWeight: '600',
    fontSize: RFValue(17),
    paddingTop: 5,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: 10,
  },
  clockIconStyle: { height: 20, width: 20, marginHorizontal: 5 },
  dateTextStyle: { color: Color.WHITE, fontWeight: '600' },
});
