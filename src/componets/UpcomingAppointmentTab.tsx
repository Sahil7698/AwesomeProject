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

interface upcomingAppointmentProps {
  name?: string;
  specialty?: string;
  detailsOnPress?: () => void;
  trueOnPress?: () => void;
  falseOnPress?: () => void;
  avatar?: ImageSourcePropType;
  rating?: number;
}

const UpcomingAppointmentTab = (props: upcomingAppointmentProps) => {
  return (
    <View style={styles.upcomingCardContainer}>
      <View style={styles.upcomingImageContainer}>
        <Image source={props?.avatar} style={styles.upcomingImageStyle} />
        <View style={styles.upcomingDoctorInfo}>
          <Text style={styles.upcomingDoctorNameStyle}>{props?.name}</Text>
          <Text>{props?.specialty}</Text>
        </View>
      </View>
      <View style={styles.upcomingImageContainer}>
        <TouchableOpacity
          style={styles.upcomingDetailButton}
          onPress={props?.detailsOnPress}
        >
          <Text style={styles.upcomingDetailButtonText}>{'Details'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.upcomingReviewButton}
          onPress={props?.trueOnPress}
        >
          <Image
            source={require('../assets/icons/right_icon.png')}
            resizeMode="contain"
            style={styles.trueIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.upcomingReviewButton}
          onPress={props?.falseOnPress}
        >
          <Image
            source={require('../assets/icons/false_icon.png')}
            resizeMode="contain"
            style={styles.falseIconStyle}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UpcomingAppointmentTab;

const styles = StyleSheet.create({
  upcomingCardContainer: {
    padding: 10,
    backgroundColor: Color.SIGNUP_BUTTON_COLOR,
    marginHorizontal: 18,
    borderRadius: 10,
    marginTop: 20,
  },
  upcomingImageStyle: { height: 70, width: 70, borderRadius: 100 },
  upcomingDoctorInfo: {
    justifyContent: 'center',
    marginLeft: 15,
  },
  upcomingDoctorNameStyle: { color: Color.PRIMARY_COLOR, fontWeight: '700' },
  upcomingImageContainer: { flexDirection: 'row' },
  upcomingDetailButton: {
    width: '70%',
    backgroundColor: Color.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 5,
    marginTop: 10,
    marginRight: 15,
  },
  upcomingReviewButton: {
    width: '9%',
    backgroundColor: Color.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginTop: 10,
    marginRight: 20,
  },
  upcomingDetailButtonText: { color: Color.WHITE },
  trueIconStyle: { width: 15, height: 15 },
  falseIconStyle: { width: 12, height: 12 },
});
