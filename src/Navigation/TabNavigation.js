import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import {Home, Profile} from '../Screen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen  name="Home" component={HomeStack} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};


export default TabNavigation;