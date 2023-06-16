import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import ListingCard from "../components/ListingCard";
import colors from "../config/colors";
const listings = [
  {
    id: 1,
    title: "Buy my jacket",
    price: "10,000",
    image: require("../assets/listimg1.jpg"),
  },
  {
    id: 2,
    title: "Buy my watch",
    price: "15,000",
    image: require("../assets/listimg2.jpg"),
  },
  {
    id: 3,
    title: "Nice Shoe",
    price: "5,000",
    image: require("../assets/listimg3.jpg"),
  },
];
export default function ListingScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <ListingCard
            title={item.title}
            price={item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
    screen:{
        padding:20,
        backgroundColor:colors.light
    }
})