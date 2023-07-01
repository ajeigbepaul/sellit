import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import colors from "../config/colors";
import ListItems from "../components/ListItems";
import ListingCard from "../components/ListingCard";

function ListingDetailsScreen({route}) {
  const listing = route.params
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <Image
          source={listing.image}
          resizeMode="cover"
          style={styles.listImage}
        />
        <View style={styles.listDetails}>
          <Text style={styles.listTitle}>{listing.title}</Text>
          <Text style={styles.listSubtitle}>N {listing.price}</Text>
          <View style={styles.listItemsContainer}>
            <ListItems
              image={require("../assets/profilepics.jpg")}
              title="Ajeigbe Paul"
              subTitle="5 listings"
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f3f3",
  },
  listContainer: {
    flex: 1,
    overflow: "hidden",
    marginBottom: 20,
  },
  listImage: {
    width: "100%",
    height: 300,
  },
  listItemsContainer: { marginTop: 25 },
  listDetails: {
    paddingHorizontal: 10,
    width: "100%",
  },
  listTitle: {
    marginVertical: 5,
    fontSize: 20,
    fontWeight: "600",
  },
  listSubtitle: {
    color: colors.secondary,
    fontSize: 18,
    fontWeight: "600",
  },
});

export default ListingDetailsScreen;
