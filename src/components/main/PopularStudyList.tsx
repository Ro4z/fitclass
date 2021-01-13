import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import PopularStudyListItem from './PopularStudyListItem';

const data = [
  {title: '겁나 나는 오늘을 위해 태어난겨', numOfMembers: 35},
  {title: '[소확행]소근육도 확실하게 행잉레그레이즈', numOfMembers: 29},
  {title: '이 중량에 잠이 오냐', numOfMembers: 28},
];

function PopularStudyList() {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>인기 독서실</Text>
      <View style={styles.flatListView}>
        <FlatList
          data={[...data, ...data, ...data]}
          renderItem={({item, index}) => (
            <PopularStudyListItem data={item} index={index} />
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </View>
  );
}

export default PopularStudyList;

const styles = StyleSheet.create({
  main: {
    marginTop: 5,
    marginBottom: 30,
    height: 200,
  },
  title: {
    fontFamily: 'NanumSquareR',
    fontSize: 15,
    color: 'rgba(200,200,200,0.8)',
    marginVertical: 10,
  },
  flatListView: {
    width: '100%',
    height: 150,
  },
  separator: {
    height: 7,
  },
});
