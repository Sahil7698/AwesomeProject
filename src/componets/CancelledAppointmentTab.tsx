import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Color } from '../assets/styles/colors';

interface cancelledAppointmentProps {
  name?: string;
  specialty?: string;
  onPress?: () => void;
  avatar?: ImageSourcePropType;
}

const CancelledAppointmentTab = (props: cancelledAppointmentProps) => {
  return (
    <View style={styles.cancelledCardContainer}>
      <View style={styles.cancelledImageContainer}>
        <Image source={props?.avatar} style={styles.cancelledImageStyle} />
        <View style={styles.cancelledDoctorInfo}>
          <Text style={styles.cancelledDoctorNameStyle}>{props?.name}</Text>
          <Text>{props?.specialty}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.cancelledReviewButton}
        onPress={props?.onPress}
      >
        <Text style={styles.cancelledReviewButtonText}>{'Add Review'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CancelledAppointmentTab;

const styles = StyleSheet.create({
  cancelledCardContainer: {
    padding: 10,
    backgroundColor: Color.SIGNUP_BUTTON_COLOR,
    marginHorizontal: 18,
    borderRadius: 10,
    marginTop: 20,
  },
  cancelledImageStyle: { height: 70, width: 70, borderRadius: 100 },
  cancelledDoctorInfo: {
    justifyContent: 'center',
    marginLeft: 15,
  },
  cancelledDoctorNameStyle: { color: Color.PRIMARY_COLOR, fontWeight: '700' },
  cancelledImageContainer: { flexDirection: 'row' },
  cancelledReviewButton: {
    width: '100%',
    backgroundColor: Color.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 5,
    marginTop: 10,
  },
  cancelledReviewButtonText: { color: Color.WHITE },
});
