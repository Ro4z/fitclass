import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import WorkoutStudyContainer from '@components/main/WorkoutStudyContainer';
import BannerImage from '@components/main/BannerImage';
import PTClassContainer from '@components/main/PTClassContainer';

function MainScreen() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <WorkoutStudyContainer />
      <BannerImage />
      <PTClassContainer />
    </SafeAreaView>
  );
}

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
