import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MenuIcon from 'react-native-vector-icons/Entypo';
MenuIcon.loadFont();

type HeaderProps = {
  title: string;
};
function Header({title = ''}: HeaderProps) {
  return (
    <View style={styles.header}>
      <MenuIcon name="menu" style={styles.menuIcon} size={30} />
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
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    fontFamily: 'OpenSauceSans-Bold',
    color: '#fff',
  },
  menuIcon: {
    color: '#ffffff',
  },
});

export default Header;
