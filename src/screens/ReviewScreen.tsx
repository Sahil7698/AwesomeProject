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
import { useRoute } from '@react-navigation/native';
import { RootRouteProps } from '../types/RootStackProps';

const ReviewScreen = () => {
  const navigation = useCustomNavigation('ReviewScreen');
  const [review, setReview] = useState('');
  const [ratingButton, setRatingButton] = useState<number>(0);
  const array = new Array(5).fill(1);
  const route = useRoute<RootRouteProps<'ReviewScreen'>>();

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={Color.STATUS_BAR_COLOR}
      />
      <CustomHeader
        title={'Review'}
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
      <View style={styles.imageContainer}>
        <Image
          source={route?.params?.image}
          resizeMode="contain"
          style={styles.imageStyle}
        />
      </View>
      <Text style={styles.doctorNameTextStyle}>{route?.params?.name}</Text>
      <Text style={styles.doctorSpecialityTextStyle}>
        {route?.params?.speciality}
      </Text>
      <View style={styles.ratingContainer}>
        <View style={styles.favContainer}>
          <Image
            source={require('../assets/icons/heart_fill_icon.png')}
            resizeMode="contain"
            style={styles.heartIconStyle}
          />
        </View>
        <View style={styles.ratingStarContainer}>
          {array.map((_, i) => {
            const starValue = i + 1;
            const isFilled = starValue <= ratingButton;
            return (
              <View>
                <TouchableOpacity
                  style={styles.ratingStarContainer}
                  onPress={() => setRatingButton(starValue)}
                >
                  <Image
                    source={
                      isFilled
                        ? require('../assets/icons/fill_star_icon.png')
                        : require('../assets/icons/star_icon.png')
                    }
                    style={styles.starIconStyle}
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
      <TextInput
        value={review}
        onChangeText={text => setReview(text)}
        multiline={true}
        numberOfLines={4}
        placeholder="Enter your comment here.."
        style={styles.reviewInputStyle}
      />
      <TouchableOpacity style={styles.addReviewButton}>
        <Text style={styles.addReviewTextStyle}>{'Add Review'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
    paddingHorizontal: 18,
  },
  backIconCountainerStyle: { height: '100%', justifyContent: 'center' },
  headerBackIconStyle: { height: wp(5), width: wp(10) },
  topTextStyle: { textAlign: 'left', fontSize: 14 },
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
});
