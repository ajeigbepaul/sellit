import { FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Screen from "../components/Screen";
import ListingCard from "../components/ListingCard";
import colors from "../config/colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";
import useAxiosPrivate from "../hook/useAxios";
import client from "../api/client";



export default function ListingScreen({ navigation }) {
  const axiosPrivate = useAxiosPrivate();
  const thumbnail = 'https://img.freepik.com/free-vector/colourful-africa-map-logo-with-slogan-placeholder_23-2148737216.jpg?q=10&h=200'
  const [listings, setListings] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error, setError] = useState(false)
 
  const getListing = async () => {
    setLoading(true)
    const res = await client.get("/listing");
    setLoading(false);

    if (!res) return setError(true);

    setError(false);
    setListings(res.data);
    // console.log(listings);
  };
  useEffect(() => {
    getListing();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Sorry temporarily down</AppText>
          <AppButton title="Refresh" bgcolor="primary" onPress={getListing} />
        </>
      )}
      {/* <ActivityIndicator visible={isloading}/> */}
      
      {loading && <ActivityIndicator visible={true} />}
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing._id.toString()}
        renderItem={({ item }) => (
          <ListingCard
            title={item.title}
            price={item.price}
            image={item.images[0]}
            onPress={() => navigation.navigate("ListingDetails", item)}
            thumbnailUrl={thumbnail}
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
