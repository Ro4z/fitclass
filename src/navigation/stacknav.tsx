import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import {BACKGROUND} from '@styles/color';
import ProfileScreen from '@screens/ProfileScreen';
import MainScreen from '@screens/MainScreen';
import WorkoutStudyScreen from '@screens/WorkoutStudyScreen';
import MyClassScreen from '@screens/MyClassScreen';

const Stack = createStackNavigator();

const defaultOptions: StackNavigationOptions = {
  headerShown: false,
  cardStyle: {
    backgroundColor: BACKGROUND,
  },
};
type NavigationProps = {
  defaultscreen: string;
};

function DefaultNavigationContainer({defaultscreen = ''}: NavigationProps) {
  return (
    <Stack.Navigator initialRouteName={defaultscreen}>
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
      <Stack.Screen
        name="MyClass"
        component={MyClassScreen}
        options={defaultOptions}
      />
    </Stack.Navigator>
  );
}

export default DefaultNavigationContainer;
