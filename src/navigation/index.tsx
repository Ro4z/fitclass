import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {BACKGROUND} from '@styles/color';
import ProfileScreen from '@screens/ProfileScreen';
import MainScreen from '@screens/MainScreen';
import WorkoutStudyScreen from '@screens/WorkoutStudyScreen';

const Stack = createStackNavigator();

const defaultOptions: StackNavigationOptions = {
  headerShown: false,
  cardStyle: {
    backgroundColor: BACKGROUND,
  },
};

function DefaultNavigationContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={defaultOptions}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={defaultOptions}
        />
        <Stack.Screen
          name="WorkoutStudy"
          component={WorkoutStudyScreen}
          options={defaultOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default DefaultNavigationContainer;
