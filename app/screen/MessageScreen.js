import {  FlatList, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import ListItems from "../components/ListItems";
import Screen from "../components/Screen";
import ItemSeperatorView from "../components/ItemSeperatorView";
import SwipeView from "../components/SwipeView";
const initialMessages = [
  {
    id: 1,
    title: "Hello paul",
    description: "how much is this?",
    image: require("../assets/profilepics.jpg"),
  },
  {
    id: 2,
    title: "Hi",
    description: "when is this available?",
    image: require("../assets/profilepics.jpg"),
  },
  {
    id: 3,
    title: "Hello paul",
    description: "how much is this?",
    image: require("../assets/profilepics.jpg"),
  },
];
export default function MessageScreen() {
    const [newMessage, setNewmessage] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)
    const handleDelete = item =>{
       const filteredM = newMessage.filter(m => m.id !== item.id)
       setNewmessage(filteredM)
    }
    // SwipeView is being called as function and not at a component. 
    // Similarly we would have written something like this const render = () => <SwipeView/>
  return (
   <Screen>

       <FlatList
         data={newMessage}
         keyExtractor={(message) => message.id.toString()}
         renderItem={({ item }) => (
           <ListItems
             title={item.title}
             subTitle={item.description}
             image={item.image}
             handlePress={()=>{console.log('Messages', item)}}
             renderRightActions={()=><SwipeView onPress={() =>handleDelete(item)}/>}
           />
         )}
         ItemSeparatorComponent={()=><ItemSeperatorView/>}
         refreshing={refreshing}
         onRefresh={()=>{
            setNewmessage([
              {
                id: 2,
                title: "Hi",
                description: "when is this available?",
                image: require("../assets/profilepics.jpg"),
              },
              {
                id: 3,
                title: "Hello paul",
                description: "how much is this?",
                image: require("../assets/profilepics.jpg"),
              },
            ]);
         }}
       />
   </Screen>
   
  );
}

const styles = StyleSheet.create({
})