import React from 'react';
import {  StyleSheet, View } from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import colors from '../config/colors';
import AppText from '../components/AppText';
import ListItem from "../components/lists/ListItem";

function ListingDetailsScreen({route}) {
    const listing = route.params;
    return (
        <View>
            <Image style={styles.image} preview={{uri:listing.images[0].thumbnailUrl}}
            tint="light" uri={listing.images[0].url}/>
            <View style={styles.detailsContainer}>

            <AppText style={styles.title}>{listing.title}</AppText>
            <AppText style={styles.price}>${listing.price}</AppText>
            <View style={styles.userContainer}>

            <ListItem 
                image={require("../assets/user.png")}
                title="Jake"
                subTitle="5 Listings"
            />
            </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:300,
    },
    detailsContainer:{
        padding:20
    },
    title:{
        fontSize:24,
        fonatWeight:"500",

    },
    price:{
        color:colors.secondary,
        fontWeight:"bold",
        fontSize:20,
        marginVertical:10,
    },
    userContainer:{
        marginVertical:30,
    }
    
})

export default ListingDetailsScreen;