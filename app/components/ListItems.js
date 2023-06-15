import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import React from "react";
import { Image } from "react-native";
import colors from "../config/colors";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
export default function ListItems({
  image,
  title,
  subTitle,
  handlePress,
  renderRightActions,
  ImageComponent
}) {
  // SO JUST A COMMENT HERE. TO IMPLIMENT A SCROLLABLE IT IS VERY IMPORTANT TO WRAP IT INSIDE
  // THE GESTUREHANDLERROOTVIEW ELSE IT WONT WORK. SPEND MINUTES TRYING TO FIGURE IT OUT.
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={handlePress}>
          <View style={styles.listItemContainer}>
           {ImageComponent}
           {image && <Image source={image} style={styles.profilePics} />}
            <View style={styles.listItemDetails}>
              <Text style={styles.listName}>{title}</Text>
              <Text style={styles.listListings}>{subTitle}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  listItemContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 15,
  },
  listItemDetails: {
    flexDirection: "column",
    justifyContent: "flex-start",
    marginHorizontal: 10,
  },
  listName: { fontWeight: "500", fontSize: 16, marginBottom: 5 },
  listListings: { fontSize: 16, color: colors.medium },
  profilePics: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
