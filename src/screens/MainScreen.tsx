import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import WorkoutStudyContainer from '@components/main/WorkoutStudyContainer';
import BannerImage from '@components/main/BannerImage';
import PTClassContainer from '@components/main/PTClassContainer';
import Header from '@components/structure/Header';
import {BACKGROUND} from '@styles/color';

function MainScreen() {
  return (
    <SafeAreaView style={{backgroundColor: 'rgb(50,50,50)'}}>
      <Header title="FITCLASS" />

      <ScrollView style={styles.mainContainer}>
        <WorkoutStudyContainer />
        <BannerImage />
        <PTClassContainer />
      </ScrollView>
    </SafeAreaView>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: BACKGROUND,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
});
