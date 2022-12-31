import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import  Constants  from 'expo-constants';
import { useNetInfo } from '@react-native-community/netinfo';
import AppText from './AppText';

function OfflineNotice(props) {
    const netInfo = useNetInfo();
    if(netInfo.type !== 'unknown' && netInfo.isInternetReachable === false) 
    return (
        <View style={styles.container}>
            <AppText style={styles.text}>No Internet connection</AppText>
        </View>
    );

    return null;
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        backgroundColor:colors.primary,
        height:50,
        justifyContent:"center",
        position: 'absolute',
        top:Constants.statusBarHeight,
        zIndex:1,
        width:"100%",
    },
    text:{
        color:colors.white,
    }
    
})
export default OfflineNotice;