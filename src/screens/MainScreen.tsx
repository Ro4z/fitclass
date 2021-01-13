import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import WorkoutStudyContainer from '@components/main/WorkoutStudyContainer';

function MainScreen() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <WorkoutStudyContainer />
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
