import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Change} from '../Screens';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Change" component={Change} />
    </Stack.Navigator>
  );
};

export default HomeStack;