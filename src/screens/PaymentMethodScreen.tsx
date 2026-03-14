import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Color } from '../assets/styles/colors';
import CustomHeader from '../componets/CustomHeader';
import useCustomNavigation from '../hooks/useCustomNavigation';
import { RFValue } from 'react-native-responsive-fontsize';

const PaymentMethodScreen = () => {
  const navigation = useCustomNavigation('PaymentMethodScreen');
  const [isButtonPressed, setIsButtonPressed] = useState(true);
  const [isPaymentButtonPressed, setIsPaymentButtonPressed] = useState(1);

  const paymentOptiontData = [
    {
      id: 1,
      icon: require('../assets/icons/applepay_icon.png'),
      name: 'Apple Pay',
    },
    {
      id: 2,
      icon: require('../assets/icons/paypal_icon.png'),
      name: 'Paypal',
    },
    {
      id: 3,
      icon: require('../assets/icons/googlepay_icon.png'),
      name: 'Google Pay',
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
        title={'Payment Method'}
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
        <Text style={styles.creditCardText}>{'Credit & Debit Card'}</Text>
        <TouchableOpacity
          style={styles.cardSelectionContainer}
          onPress={() => {
            setIsButtonPressed(!isButtonPressed);
            navigation.navigate('AddCardScreen');
          }}
        >
          <Image
            source={require('../assets/icons/add_card_icon.png')}
            resizeMode="contain"
            style={styles.cardIconStyle}
          />
          <View style={styles.paymentOptionContainer}>
            <Text style={styles.addCardTextStyle}>{'Add New Card'}</Text>
          </View>
          <View style={styles.radioButtonOuterStyle}>
            <View
              style={[
                styles.radioButtonInnerStyle,
                isButtonPressed && styles.radioActive,
              ]}
            >
              <></>
            </View>
          </View>
        </TouchableOpacity>
        <Text style={styles.creditCardText}>{'More Payment Option'}</Text>
        {paymentOptiontData.map(item => {
          const isPressed = isPaymentButtonPressed === item?.id;
          return (
            <TouchableOpacity
              key={item.id}
              style={styles.applePayContainer}
              onPress={() => setIsPaymentButtonPressed(item?.id)}
            >
              <Image
                source={item?.icon}
                resizeMode="contain"
                style={styles.cardIconStyle}
              />
              <View style={styles.paymentOptionContainer}>
                <Text style={styles.addCardTextStyle}>{item?.name}</Text>
              </View>
              <View style={styles.radioButtonOuterStyle}>
                <View
                  style={[
                    styles.radioButtonInnerStyle,
                    isPressed && styles.radioActive,
                  ]}
                >
                  <></>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default PaymentMethodScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
  },
  headerBackIconStyle: { height: wp(5), width: wp(10) },
  backIconCountainerStyle: { height: '100%', justifyContent: 'center' },
  bodyContainer: {
    backgroundColor: Color.WHITE,
    flex: 1,
    paddingHorizontal: RFValue(24),
    paddingTop: RFValue(18),
  },
  creditCardText: { fontSize: RFValue(16), fontWeight: '500' },
  cardSelectionContainer: {
    width: '100%',
    height: '6%',
    backgroundColor: Color.STATUS_BAR_COLOR,
    marginTop: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    marginBottom: 35,
  },
  cardIconStyle: { width: 30, height: 30, marginRight: 12 },
  addCardTextStyle: {
    color: Color.PLACEHOLDER_COLOR,
    fontSize: RFValue(14),
  },
  radioButtonOuterStyle: {
    height: 22,
    width: 22,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: Color.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonInnerStyle: {
    height: 14,
    width: 14,
    borderRadius: 50,
    borderColor: Color.PRIMARY_COLOR,
    borderWidth: 1.5,
    backgroundColor: 'transparent',
  },
  radioActive: {
    backgroundColor: Color.PRIMARY_COLOR,
  },
  applePayContainer: {
    width: '100%',
    height: '6%',
    backgroundColor: Color.STATUS_BAR_COLOR,
    marginTop: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  paymentOptionContainer: { flex: 1 },
});
