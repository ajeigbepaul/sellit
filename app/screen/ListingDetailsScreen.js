import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import colors from "../config/colors";
import ListItems from "../components/ListItems";

function ListingDetailsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <Image
          source={require("../assets/listimg1.jpg")}
          resizeMode="cover"
          style={styles.listImage}
        />
        <View style={styles.listDetails}>
          <Text style={styles.listTitle}>Sleek jacket for sale</Text>
          <Text style={styles.listSubtitle}>N 30,000</Text>
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
    // padding: 20,
    // paddingTop: 80,
    backgroundColor: "#f8f3f3",
  },
  listContainer: {
    flex: 1,
    // borderRadius: 15,
    // backgroundColor: colors.white,
    overflow: "hidden",
    marginBottom: 20,
  },
  listImage: {
    width: "100%",
    height: 300,
  },
  listItemsContainer: { marginTop: 25 },
  listDetails: {
    paddingHorizontal: 20,
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
