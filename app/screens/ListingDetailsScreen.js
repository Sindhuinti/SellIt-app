import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import AppText from '../components/AppText';
import ListItem from "../components/lists/ListItem";

function ListingDetailsScreen({route}) {
    const listing = route.params;
    return (
        <View>
            <Image style={styles.image} source={listing.image}/>
            <View style={styles.detailsContainer}>

            <AppText style={styles.title}>{listing.title}</AppText>
            <AppText style={styles.price}>${listing.price}</AppText>
            <View style={styles.userContainer}>

            <ListItem 
                image={require("../assets/mosh.jpg")}
                title="Mosh"
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