import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>asdf</Text>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    shadowOffset: {
      width: 300,
      height: 100,
    },
  },
});
