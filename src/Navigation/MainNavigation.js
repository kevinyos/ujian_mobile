import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import MyDrawer from './Drawer';
// import HomeStack from './HomeStack';

const MainNavigation = () => {
  return (
    <NavigationContainer>
        <MyDrawer />
      <TabNavigation />
    </NavigationContainer>
  );
};

export default MainNavigation;