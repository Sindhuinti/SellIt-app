import React, { useEffect, useState } from 'react';
import {  FlatList, StyleSheet, View } from 'react-native';
import Card from '../components/Card';
import routes from '../navigation/routes';
import Screen from '../components/Screen';
import colors from '../config/colors';
import listingsApi from '../api/listings';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';

function ListingScreen({navigation}) {
    const getListingsApi =  useApi(listingsApi.getListings);

    useEffect(()=>{
        getListingsApi.request();
        
    },[]);
    

    return (
        <Screen style={styles.screen}>
        {getListingsApi.error && <View style={styles.error}>
            <AppText>Oops! Couldn't Load The Items </AppText>
            <AppButton title="Retry" onPress={loadListings}/>
        </View>}
        <ActivityIndicator visible={getListingsApi.loading}/>
            <FlatList
                data={getListingsApi.data}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({item})=>(
                
               <Card
                title={item.title}
                subTitle={"$"+item.price}
                imageUrl={item.images[0].url}
                onPress={()=>navigation.navigate(routes.LISTING_DETAILS,item)}
                thumbnailUrl={item.images[0].thumbnailUrl}
               /> )}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen:{
        padding:10,
        backgroundColor:colors.light,
    },
    error:{
        flex:10,
        justifyContent:"center",
        alignItems: "center",
    }
    
})

export default ListingScreen;