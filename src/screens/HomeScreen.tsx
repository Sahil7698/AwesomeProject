import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Color } from '../assets/styles/colors';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.WHITE,
  },
  bodyContainer: { backgroundColor: Color.WHITE, flex: 1 },
});
