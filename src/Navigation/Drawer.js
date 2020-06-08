import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import {Home, Profile} from '../Screen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Logout } from '../Reducer/Profile';

const Drawer = createDrawerNavigator();

function MyDrawer (){
    return(
        <Drawer.Navigator
        drawerType='slide'
        drawerPosition='right'>
            <Drawer.Screen name="Logout" component={Logout} />
            <Drawer.Screen name="Setting" />
        </Drawer.Navigator>
    )
}

export default MyDrawer;