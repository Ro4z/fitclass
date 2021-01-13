import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ContentTitle from './ContentTitle';
import PopularStudyList from './WorkoutStudyList';

function WorkoutStudyContainer() {
  return (
    <View style={styles.mainContainer}>
      <ContentTitle title="Home Fitness" subTitle="우리 같이 운동합시다" />
      <PopularStudyList />
    </View>
  );
}

export default WorkoutStudyContainer;

const styles = StyleSheet.create({
  mainContainer: {
    height: 250,
    marginBottom: 30,
  },
});
