import React,{useState} from 'react';
import {FlatList,  StyleSheet, View} from "react-native";

import ListItem from "../components/lists/ListItem";
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import Screen from '../components/Screen';

const initialMessages = [
    {
        id:1,
        title:"Jacket",
        description:"Hey! I really loved ur jacket.The design and color is perfect.",
        image:require("../assets/user.png")
    },
    {
        id:2,
        title:"Couch",
        description:"The color and design of the product is really awesome.I want to buy the couch for my hall.",
        image:require("../assets/user.png")
    }
]

function MessagesScreen(props) {
    const [messages,setMessages] = useState(initialMessages);
    const [refreshing,setRefreshing] = useState(false);

    const handleDelete = message => {
        const newMessages = messages.filter((m)=> m.id !== message.id);
       setMessages(newMessages);

    }

    return (
        <Screen >
        <FlatList 
            data={initialMessages}
            keyExtractor={message => message.id.toString()}
            renderItem={
                ({item}) =>
            <ListItem
               title={item.title}
               subTitle={item.description}
               image={item.image}
               onPress={()=> console.log("message seleted",item)}
               renderRightActions={() => (<ListItemDeleteAction
                onPress={()=> handleDelete(item)}
               />)}
               
            />
            }
            ItemSeparatorComponent={ListItemSeparator}
            refreshing={refreshing}
            onRefresh={()=>{
                setMessages([
                    {
                    id:2,
                    title:"T2",
                    description:"D2",
                    image:require("../assets/user.png")
                }
                    
                ]);
            }}
        />
        </Screen>
    );
}

const styles = StyleSheet.create({
    
    
})

export default MessagesScreen;