import {  FlatList, StyleSheet } from "react-native";
import React from "react";
import ListItems from "../components/ListItems";
import Screen from "../components/Screen";
import ItemSeperatorView from "../components/ItemSeperatorView";
const messages = [
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
  return (
   <Screen>

       <FlatList
         data={messages}
         keyExtractor={(message) => message.id.toString()}
         renderItem={({ item }) => (
           <ListItems
             title={item.title}
             subTitle={item.description}
             image={item.image}
           />
         )}
         ItemSeparatorComponent={()=><ItemSeperatorView/>}
       />
   </Screen>
   
  );
}

const styles = StyleSheet.create({
})