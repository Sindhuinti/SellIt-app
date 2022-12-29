import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AppText from './AppText';
import colors from "../config/colors";

function ListItem({title,subTitle,image}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image}/>
            <View style={styles.listConatiner}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
        rightMargin:10,
    },
    listConatiner:{
        marginLeft:15,
        marginTop:5,
    },

    subTitle:{
        color:colors.medium,
        
    },
    title:{
        fontWeight:"500",
    }
    
})
export default ListItem;