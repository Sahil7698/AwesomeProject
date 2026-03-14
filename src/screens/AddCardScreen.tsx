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
import CustomTextInput from '../componets/CustomTextInput';

const AddCardScreen = () => {
  const navigation = useCustomNavigation('AddCardScreen');
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  const handleSaveCard = () => {
    navigation.navigate('PaymentScreen');
  };

  const formatCardNumber = (num: any) => {
    return num
      ? num
          .replace(/\s?/g, '')
          .replace(/(\d{4})/g, '$1 ')
          .trim()
      : '0000 0000 0000 0000';
  };

  const handleCardNumberChange = (text: any) => {
    // Remove any non-digit characters
    const cleaned = text.replace(/[^0-9]/g, '');

    // Update state only if it's 16 digits or less
    if (cleaned.length <= 16) {
      setCardNumber(cleaned);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={Color.STATUS_BAR_COLOR}
      />
      <CustomHeader
        title={'Add Card'}
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
        <View style={styles.cardStyle}>
          <View style={styles.cardContainer}>
            <View style={styles.whiteContainer}>
              <></>
            </View>
          </View>
          <View style={styles.cardDetailsContainer}>
            <Text style={styles.cardNumberStyle}>
              {formatCardNumber(cardNumber)}
            </Text>
            <View style={styles.cardHolderContainer}>
              <View style={styles.cardExpiryContainer}>
                <Text style={styles.cardHolderText}>{'Card Holder Name'}</Text>
                <Text style={styles.cardHolderNameText}>
                  {cardHolder ? cardHolder : 'John Doe'}
                </Text>
              </View>
              <View style={styles.cardExpiryContainer}>
                <Text style={styles.cardExpiryDate}>{'Expiry Date'}</Text>
                <Text style={styles.cardExpiryDateText}>
                  {cardExpiry ? cardExpiry : '04/28'}
                </Text>
              </View>
              <Image
                source={require('../assets/icons/cardchip_icon.png')}
                style={styles.cardChipIcon}
                resizeMode="contain"
              />
            </View>
          </View>
          <Image
            source={require('../assets/icons/card_design_icon.png')}
            style={styles.cardDesignOverlay}
            resizeMode="cover"
          />
        </View>
        <CustomTextInput
          title="Card Holder Name"
          placeholder="John Doe"
          value={cardHolder}
          onChangeText={setCardHolder}
        />
        <CustomTextInput
          title="Card Number"
          placeholder="0000 0000 0000 0000"
          keyboardType="phone-pad"
          value={cardNumber}
          onChangeText={handleCardNumberChange}
          maxLength={16}
        />
        <View style={styles.expiryDateContainer}>
          <CustomTextInput
            title="Expiry Date"
            placeholder="04/28"
            keyboardType="phone-pad"
            value={cardExpiry}
            onChangeText={setCardExpiry}
            viewStyle={styles.expiryInputStyle}
          />
          <CustomTextInput
            title="CVV"
            placeholder="000"
            keyboardType="phone-pad"
            value={cardCvv}
            onChangeText={setCardCvv}
            viewStyle={styles.expiryInputStyle}
          />
        </View>
        <TouchableOpacity
          style={styles.saveCardButtonStyle}
          onPress={handleSaveCard}
        >
          <Text style={styles.buttonText}>Save Card</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddCardScreen;

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
  expiryInputStyle: { width: 160 },
  expiryDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    width: '100%',
  },
  buttonText: {
    color: Color.WHITE,
    fontSize: RFValue(18),
    fontWeight: '700',
  },
  whiteContainer: {
    height: '100%',
    width: '18%',
    alignSelf: 'flex-end',
    borderRadius: 2,
    borderWidth: 2,
    borderColor: Color.WHITE,
    marginHorizontal: 17,
    flexDirection: 'row',
  },
  cardContainer: {
    width: '100%',
    height: 15,
    marginTop: 15,
  },
  cardStyle: {
    height: RFValue(170),
    backgroundColor: Color.PRIMARY_COLOR,
    borderRadius: 20,
    marginBottom: 15,
    overflow: 'hidden',
    justifyContent: 'space-between',
    elevation: 5,
  },
  cardDetailsContainer: {
    height: '50%',
    marginTop: 40,
    padding: 17,
  },
  cardDesignOverlay: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    zIndex: -1000,
  },
  cardHolderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardNumberStyle: { fontSize: RFValue(16), color: Color.WHITE },
  cardHolderText: { fontSize: RFValue(10), color: Color.WHITE },
  cardHolderNameText: {
    fontSize: RFValue(10),
    color: Color.WHITE,
    fontWeight: '800',
  },
  cardExpiryDate: { fontSize: RFValue(10), color: Color.WHITE },
  cardExpiryDateText: {
    fontSize: RFValue(10),
    color: Color.WHITE,
    fontWeight: '800',
  },
  cardChipIcon: { height: 30, width: 30, marginTop: 10 },
  cardExpiryContainer: { marginTop: 10 },
});
