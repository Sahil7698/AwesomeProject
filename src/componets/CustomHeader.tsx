import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import React, { memo } from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Color } from '../assets/styles/colors';
import { RFValue } from 'react-native-responsive-fontsize';

interface headerProps {
  headerLeftComponent?: React.ReactNode;
  title?: String;
  headerRightComponent?: React.ReactNode;
  viewStyle?: ViewStyle;
  headerCenteredComponent?: React.ReactNode;
}
const CustomHeader = (props: headerProps) => {
  const styles = useStyles();
  return (
    <View style={[styles.header, props.viewStyle]}>
      <View style={styles.headerBox}>
        <View style={styles.headerLeft}>{props.headerLeftComponent}</View>
        <View style={styles.headerCenter}>
          {props.title ? (
            <Text numberOfLines={1} style={styles.headerTitle}>
              {props.title}
            </Text>
          ) : (
            props.headerCenteredComponent
          )}
        </View>
        <View style={styles.headerRight}>{props.headerRightComponent}</View>
      </View>
    </View>
  );
};

export default memo(CustomHeader);

const useStyles = () => {
  const edges = useSafeAreaInsets();
  return StyleSheet.create({
    header: {
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: Color.WHITE,
      shadowColor: Color.BLACK,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowRadius: 7,
      shadowOpacity: 0.2,
      zIndex: 9999,
    },
    headerBox: {
      width: wp(100),
      height: hp(7),
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: edges.top,
    },
    headerLeft: {
      position: 'absolute',
      left: 0,
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
      height: '100%',
      paddingHorizontal: RFValue(16),
    },
    headerRight: {
      position: 'absolute',
      right: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
      flexDirection: 'row',
      height: '100%',
      paddingHorizontal: RFValue(16),
    },
    headerCenter: {
      width: '60%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: '500',
    },
    headerTitle: {
      fontSize: RFValue(24),
      fontWeight: '700',
      color: Color.PRIMARY_COLOR,
    },
  });
};
