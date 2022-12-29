import React from 'react';
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import  {Swipeable ,GestureHandlerRootView}from 'react-native-gesture-handler';

import AppText from './AppText';
import colors from "../config/colors";

function ListItem({title,subTitle,image,IconComponent, onPress,renderRightActions}) {
    return (
        <GestureHandlerRootView>

        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight 
        underlayColor={colors.light}
        onPress={onPress}>

        <View style={styles.container}>
        {IconComponent}
            {image && <Image style={styles.image} source={image}/>}
            <View style={styles.listConatiner}>
                <AppText style={styles.title}>{title}</AppText>
                {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
            </View>
        </View>
        </TouchableHighlight>
        </Swipeable>
        </GestureHandlerRootView>
        
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:15,
        backgroundColor:colors.white,
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,

    },
    listConatiner:{
        marginLeft:10,
        justifyContent:"center",
    },

    subTitle:{
        color:colors.medium,
        
    },
    title:{
        fontWeight:"500",
    }
    
})
export default ListItem;