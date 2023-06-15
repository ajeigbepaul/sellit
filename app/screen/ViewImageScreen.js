import { View, Image, StyleSheet } from "react-native";
import React from "react";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import colors from "../config/colors";
function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.IconClose}>
        <MaterialCommunityIcons name="close" size={30} color="white" />
      </View>
      <View style={styles.iconDelete}>
        <MaterialCommunityIcons name="trash-can-outline" size={30} color="white" />
      </View>
      <View style={styles.imageView}>
        <Image
          resizeMode="contain"
          source={require("../assets/view2.jpg")}
          // style={styles.imageContainer}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
    position: "relative",
  },
  IconClose: {
    position: "absolute",
    top: 40,
    left: 30,
    zIndex: 999,
  },
  imageView: {
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    height: 400
  },
  iconDelete: {
    position: "absolute",
    top: 40,
    right: 30,
    zIndex: 999,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen;
