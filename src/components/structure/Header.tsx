import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type HeaderProps = {
  title: string;
};
function Header({title = ''}: HeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 55,
    backgroundColor: 'rgb(50,50,50)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: 'OpenSauceSans-Bold',
    color: '#fff',
  },
});

export default Header;
