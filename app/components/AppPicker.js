import React, { useState } from 'react';
import { Button, FlatList, Modal, StyleSheet, TextInput, View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import colors from '../config/colors';
import defaultStyles from "../config/styles";
import AppText from './AppText';
import { TouchableWithoutFeedback } from 'react-native';
import Screen from './Screen';
import PickerItem from './PickerItem';

function AppPicker({icon,items,placeholder,selectedItem,onSelectItem}) {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
        {icon && <MaterialCommunityIcons name={icon} size={20} 
        color={colors.medium} style={styles.icon}
        />
        }
        {selectedItem ? <AppText style={styles.text}>{selectedItem.label}</AppText> 
        : <AppText style={styles.placeholder}>{placeholder}</AppText>
        }
        <MaterialCommunityIcons name="chevron-down" size={20} 
        color={colors.medium} />

        </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide">
        <Screen>

            <Button  title="close" onPress={() => setModalVisible(false)}/>
            <FlatList
                data={items}
                keyExtractor={item => item.value.toString()}
                renderItem={({item})=><PickerItem label={item.label}
                    onPress={() =>{
                        setModalVisible(false);
                        onSelectItem(item);
                    }}
                />}
            />
        </Screen>
        </Modal>
        </>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.light,
        borderRadius:25,
        flexDirection: 'row',
        width:"100%",
        padding:15,
        marginVertical:10,
    },
    icon:{
        marginRight:10,
    },
    placeholder:{
        flex:1,
        color:colors.medium,
        
    },
    text:{
        flex:1,
    },
    
    
})

export default AppPicker;