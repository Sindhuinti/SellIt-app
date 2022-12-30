import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppText from './AppText';
import Icon from './Icon';

function CategoryPickerItem({item,onPress}) {
    return (
        <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={60}
        />
      </TouchableOpacity>
      <Text style={styles.label}>{item.label}</Text>
    </View>
    );
}
const styles = StyleSheet.create({
    container:{
        paddingHorizontal:30,
        paddingVertical:15,
        alignItems:"center",
        width:"33%",
        textAlign: "center",
    },
    label:{
        marginTop:5,
        fontSize:14,
    }
})

export default CategoryPickerItem;