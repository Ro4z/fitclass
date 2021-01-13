import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import MainScreen from '@screens/MainScreen';
import {BACKGROUND} from '@styles/color';
import {WIDTH} from '@constants/dimensions';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default DefaultNavigationContainer;
