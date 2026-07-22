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
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface completeAppointmentProps {
  name?: string;
  specialty?: string;
  reBookOnPress?: () => void;
  reviewOnPress?: () => void;
  avatar?: ImageSourcePropType;
  favIcon?: ImageSourcePropType;
  rating?: number;
  favouriteButton?: () => void;
}

const CompleteAppointmentTab = (props: completeAppointmentProps) => {
  return (
    <View style={styles.completeCardContainer}>
      <View style={styles.completeImageContainer}>
        <Image source={props?.avatar} style={styles.completeImageStyle} />
        <View style={styles.completeDoctorInfo}>
          <Text style={styles.completeDoctorNameStyle}>{props?.name}</Text>
          <Text>{props?.specialty}</Text>
          <View style={styles.completeImageContainer}>
            <View style={styles.statItem}>
              <Image
                source={require('../assets/icons/fill_star_icon.png')}
                style={styles.starIconStyle}
                resizeMode="contain"
              />
              <Text style={styles.statText}>{props?.rating}</Text>
            </View>
            <TouchableOpacity
              style={styles.cardIconSmall}
              onPress={props?.favouriteButton}
            >
              <Image
                source={props?.favIcon}
                style={styles.starIconStyle}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.completeImageContainer}>
        <TouchableOpacity
          style={styles.completeRebookButton}
          onPress={props?.reBookOnPress}
        >
          <Text style={styles.completeReBookButtonText}>{'Re-Book'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.completeReviewButton}
          onPress={props?.reviewOnPress}
        >
          <Text style={styles.completeReviewButtonText}>{'Add Review'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CompleteAppointmentTab;

const styles = StyleSheet.create({
  completeCardContainer: {
    padding: 10,
    backgroundColor: Color.SIGNUP_BUTTON_COLOR,
    marginHorizontal: 18,
    borderRadius: 10,
    marginTop: 20,
  },
  completeImageStyle: { height: 70, width: 70, borderRadius: 100 },
  completeDoctorInfo: {
    justifyContent: 'center',
    marginLeft: 15,
  },
  completeDoctorNameStyle: { color: Color.PRIMARY_COLOR, fontWeight: '700' },
  completeImageContainer: { flexDirection: 'row' },
  completeRebookButton: {
    width: '47%',
    backgroundColor: Color.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 5,
    marginTop: 10,
    marginRight: 15,
  },
  completeReviewButton: {
    width: '48%',
    backgroundColor: Color.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 5,
    marginTop: 10,
  },
  completeReviewButtonText: { color: Color.WHITE },
  completeReBookButtonText: { color: Color.PRIMARY_COLOR },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.WHITE,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginRight: 8,
    marginTop: 8,
  },
  statText: {
    fontSize: 11,
    color: Color.PRIMARY_COLOR,
    marginLeft: 4,
    fontWeight: '600',
  },
  starIconStyle: { height: wp(3), width: wp(3) },
  cardIconSmall: {
    backgroundColor: Color.WHITE,
    height: wp(5),
    width: wp(5),
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
});
