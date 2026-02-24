import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Color } from '../assets/styles/colors';
import CustomHeader from '../componets/CustomHeader';
import useCustomNavigation from '../hooks/useCustomNavigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

const PrivacyPolicyScreen = () => {
  const navigation = useCustomNavigation('PrivacyPolicyScreen');
  const loremIpsum =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam. Fusce a scelerisque neque, sed accumsan metus.\n\nNunc auctor tortor in dolor luctus, quis euismod urna tincidunt. Aenean arcu metus, bibendum at rhoncus at, volutpat ut lacus. Morbi pellentesque malesuada eros semper ultrices. Vestibulum lobortis enim vel neque auctor, a ultrices ex placerat. Mauris ut lacinia justo, sed suscipit tortor. Nam egestas nulla posuere neque tincidunt porta.';
  return (
    <View>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={Color.STATUS_BAR_COLOR}
      />
      <CustomHeader
        title={'Privacy Policy'}
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
      <ScrollView
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollPadding}
      >
        <Text style={styles.lastUpdateText}>Last Update: 14/08/2024</Text>

        <Text style={styles.policyParagraph}>{loremIpsum}</Text>

        <Text style={styles.sectionTitle}>Terms & Conditions</Text>

        {[1, 2, 3, 4].map(item => (
          <View key={item} style={styles.listItem}>
            <Text style={styles.policyParagraph}>
              <Text style={styles.listNumber}>{item}. </Text>
              Ut lacinia justo sit amet lorem sodales accumsan. Proin malesuada
              eleifend fermentum. Donec condimentum, nunc at rhoncus faucibus,
              ex nisi laoreet ipsum, eu pharetra eros est vitae orci.
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default PrivacyPolicyScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  backIconCountainerStyle: { height: '100%', justifyContent: 'center' },
  headerBackIconStyle: { height: wp(5), width: wp(10) },
  contentContainer: {
    paddingHorizontal: wp(8),
    backgroundColor: Color.WHITE,
    flexGrow: 1,
  },
  scrollPadding: {
    paddingTop: wp(4),
    paddingBottom: hp(12),
  },
  lastUpdateText: {
    fontSize: RFValue(13),
    color: '#ADBCFF', // Light blue/lavender color from image
    marginBottom: wp(4),
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: RFValue(18),
    fontWeight: '700',
    color: Color.PRIMARY_COLOR, // Using your theme's blue
    marginTop: wp(6),
    marginBottom: wp(3),
  },
  policyParagraph: {
    fontSize: RFValue(12),
    color: '#4F4F4F', // Dark grey for readability
    lineHeight: RFValue(18),
    textAlign: 'justify',
  },
  listItem: {
    flexDirection: 'row',
    paddingBottom: wp(4),
  },
  listNumber: {
    fontWeight: '700',
    color: '#4F4F4F',
  },
});
