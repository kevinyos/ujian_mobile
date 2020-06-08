import React from 'react';
import {StyleSheet, View, Image, Button, FlatList, TextInput} from 'react-native';
import { Login } from '../Reducer/Profile';

const PleaseLogin = ({navigation}) => {
        return (
            <View style={StyleSheet.container}>
                <View style={StyleSheet.logoContainer}>
                    <Image style = {StyleSheet.logo} source= {require('../Assets/android_logo.png')} />
                </View>
                <View style={StyleSheet.formContainer}>
                    <TextInput placeholder='Username' />
                    <Button onPress={Login} />
                </View>
            </View>
        ); 
};

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    logoContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width:100,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default PleaseLogin;