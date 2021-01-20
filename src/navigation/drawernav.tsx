import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import DefaultNavigationContainer from '@navigation/stacknav';

const Drawer = createDrawerNavigator();

const defaultOptions: DrawerNavigationOptions = {
  headerShown: false,
};
function DrawerNavigationContainer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: '#323232',
          width: 260,
        }}
        drawerContentOptions={{
          labelStyle: {color: '#fff', fontFamily: 'OpenSauceSans-Medium'},
        }}>
        <Drawer.Screen
          name="Main"
          component={({navigation}) => (
            <DefaultNavigationContainer
              defaultscreen={'Main'}
              navigation={navigation}
            />
          )}
          options={{
            title: 'Main',
            drawerIcon: ({focused}) => (
              <Image
                source={require('@assets/image/profile_sample.jpg')}
                style={[focused ? styles.profileimage : styles.profileimage2]}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={({navigation}) => (
            <DefaultNavigationContainer
              defaultscreen={'Profile'}
              navigation={navigation}
            />
          )}
          options={{
            title: 'Profile',
            drawerIcon: ({focused}) => (
              <Image
                source={require('@assets/image/profile_sample.jpg')}
                style={[focused ? styles.profileimage : styles.profileimage2]}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="WorkoutStudy"
          component={({navigation}) => (
            <DefaultNavigationContainer
              defaultscreen={'WorkoutStudy'}
              navigation={navigation}
            />
          )}
          options={{
            title: 'WorkoutStudy',
            drawerIcon: ({focused}) => (
              <Image
                source={require('@assets/image/profile_sample.jpg')}
                style={[focused ? styles.profileimage : styles.profileimage2]}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="MyClass"
          component={({navigation}) => (
            <DefaultNavigationContainer
              defaultscreen={'MyClass'}
              navigation={navigation}
            />
          )}
          options={{
            title: 'MyClass',
            drawerIcon: ({focused}) => (
              <Image
                source={require('@assets/image/profile_sample.jpg')}
                style={[focused ? styles.profileimage : styles.profileimage2]}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigationContainer;

const styles = StyleSheet.create({
  profileimage: {
    width: 50,
    height: 50,
    marginLeft: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
    marginTop: 10,
    marginBottom: 5,
  },
  profileimage2: {
    width: 30,
    height: 30,
    marginLeft: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
    marginTop: 10,
    marginBottom: 5,
  },
});
