import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ContentTitle from './ContentTitle';
import PopularStudyList from './PopularStudyList';

function WorkoutStudyContainer() {
  return (
    <View style={styles.mainContainer}>
      <ContentTitle title="ZOOM 독서실" subTitle="우리 같이 운동합시다" />
      <PopularStudyList />
    </View>
  );
}

export default WorkoutStudyContainer;

const styles = StyleSheet.create({
  mainContainer: {},
});
