import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import CustomHeader from '../componets/CustomHeader';
import useCustomNavigation from '../hooks/useCustomNavigation';
import { Color } from '../assets/styles/colors';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

const CancelAppointment = () => {
  const navigation = useCustomNavigation('ReviewScreen');
  const [reason, setReason] = useState('');
  const [isReasonPressed, setIsReasonPressed] = useState(1);
  const cancelReasonData = [
    {
      id: 1,
      name: 'Rescheduling',
    },
    {
      id: 2,
      name: 'Weather Conditions',
    },
    {
      id: 3,
      name: 'Unexpected Work',
    },
    {
      id: 4,
      name: 'Others',
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
        title={'Cancel Appointment'}
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
      <Text style={styles.topTextStyle}>
        {
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
      </Text>
      <View style={{ height: 200, marginTop: 30 }}>
        {cancelReasonData.map(item => {
          const isPressed = isReasonPressed === item?.id;
          return (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.reasonContainer,
                {
                  backgroundColor: isPressed
                    ? Color.STATUS_BAR_COLOR
                    : Color.WHITE,
                },
              ]}
              onPress={() => setIsReasonPressed(item?.id)}
            >
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
              <View style={styles.reasonOptionContainer}>
                <Text style={styles.addCardTextStyle}>{item?.name}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <Text style={styles.bottomTextStyle}>
        {
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
      </Text>

      <TextInput
        value={reason}
        onChangeText={text => setReason(text)}
        multiline={true}
        numberOfLines={4}
        placeholder="Enter your reason here.."
        style={styles.reviewInputStyle}
      />
      <TouchableOpacity style={styles.addReviewButton}>
        <Text style={styles.addReviewTextStyle}>{'Cancel Appointment'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CancelAppointment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
    paddingHorizontal: 18,
  },
  backIconCountainerStyle: { height: '100%', justifyContent: 'center' },
  headerBackIconStyle: { height: wp(5), width: wp(10) },
  topTextStyle: { textAlign: 'left', fontSize: 14 },
  bottomTextStyle: {
    textAlign: 'left',
    fontSize: 14,
    color: Color.PLACEHOLDER_COLOR,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  imageStyle: { height: 120, width: 120, borderRadius: 100 },
  doctorNameTextStyle: {
    textAlign: 'center',
    fontSize: 24,
    color: Color.PRIMARY_COLOR,
    fontWeight: '700',
  },
  doctorSpecialityTextStyle: {
    textAlign: 'center',
    fontSize: 14,
  },
  reviewInputStyle: {
    backgroundColor: Color.STATUS_BAR_COLOR,
    height: 150,
    borderRadius: 20,
    padding: 15,
    textAlignVertical: 'top',
    marginTop: 10,
  },
  addReviewButton: {
    position: 'absolute',
    bottom: 120,
    left: 18,
    right: 0,
    width: '98%',
    backgroundColor: Color.PRIMARY_COLOR,
    height: 45,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addReviewTextStyle: { color: Color.WHITE, fontWeight: '700', fontSize: 18 },
  favContainer: {
    height: 25,
    width: 25,
    backgroundColor: Color.STATUS_BAR_COLOR,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  heartIconStyle: { height: 10, width: 10 },
  ratingStarContainer: {
    height: 25,
    backgroundColor: Color.STATUS_BAR_COLOR,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 2,
  },
  starIconStyle: { height: 12, width: 12, marginHorizontal: 5 },
  reasonContainer: {
    width: '100%',
    marginTop: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  reasonOptionContainer: { flex: 1 },
  addCardTextStyle: {
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
    marginRight: 10,
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
});
