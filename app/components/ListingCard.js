import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React from "react";
import colors from "../config/colors";
import { Image } from "react-native-expo-image-cache";
export default function ListingCard({ image, title, price, onPress, thumbnailUrl }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>

    <View style={styles.listContainer}>
      <Image uri={image} resizeMode="cover" style={styles.listImage} preview={{uri:thumbnailUrl}} />
      <View style={styles.listDetails}>
        <Text style={styles.listTitle}>{title}</Text>
        <Text style={styles.listSubtitle}>N{price}</Text>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: colors.white,
    overflow: "hidden",
    marginBottom: 20,
    height: 300,
  },
  listImage: {
    width: "100%",
    height: 200,
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
