import { FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Screen from "../components/Screen";
import ListingCard from "../components/ListingCard";
import colors from "../config/colors";
 import getTesting from "../api/listings";
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'
import ActivityIndicator from "../components/ActivityIndicator";
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
export default function ListingScreen({ navigation }) {
  const [test, setTest] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false)
  const getTest = async () => {
    setLoading(true)
    const response = await getTesting();
    setLoading(false)
    if(!response.ok) return setError(true)
    setError(false)
    setTest(response.data);
  };
  // useEffect(() => {
  //   getTest();
  // }, []);
  console.log(test);
  return (
    <Screen style={styles.screen}>
     { error && <>
     <AppText>Sorry temporarily down</AppText>
     <AppButton title="Refresh" bgcolor={colors.primary} onPress={getTest}/>
     </>}
     <ActivityIndicator visible={loading}/>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <ListingCard
            title={item.title}
            price={item.price}
            image={item.image}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
