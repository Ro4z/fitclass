import React from 'react';
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
      <Drawer.Navigator>
        <Drawer.Screen
          name="Main"
          component={({navigation}) => (
            <DefaultNavigationContainer defaultscreen={'Main'} />
          )}
          options={defaultOptions}
        />
        <Drawer.Screen
          name="Profile"
          component={({navigation}) => (
            <DefaultNavigationContainer defaultscreen={'Profile'} />
          )}
          options={defaultOptions}
        />
        <Drawer.Screen
          name="WorkoutStudy"
          component={({navigation}) => (
            <DefaultNavigationContainer defaultscreen={'WorkoutStudy'} />
          )}
          options={defaultOptions}
        />
        <Drawer.Screen
          name="MyClass"
          component={({navigation}) => (
            <DefaultNavigationContainer defaultscreen={'MyClass'} />
          )}
          options={defaultOptions}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigationContainer;
