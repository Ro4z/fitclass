import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import MainScreen from '@screens/MainScreen';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const defaultOptions: StackNavigationOptions = {
  title: 'FITCLASS',
  headerStyle: {
    backgroundColor: 'rgb(50,50,50)',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontFamily: 'OpenSauceSans-Bold',
    fontSize: 18,
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
