import { View, Text, StyleSheet, PanResponder } from "react-native";
import React from "react";
import colors from "../config/colors";
import ListItems from "../components/ListItems";
import { Image } from "react-native-expo-image-cache";
import { useNavigation } from "@react-navigation/native";
function ListingDetailsScreen({route}) {
  const navigation = useNavigation();
  const listing = route.params
  const panResponder = React.useRef(
    PanResponder.create({
      onPanResponderEnd: (e, gestureState) => {
        // Check if the swipe down gesture is significant (enough to navigate back)
        if (gestureState.dy > 50) {
          navigation.goBack(); // Navigate back to the previous screen
        }
      },
      onShouldBlockNativeResponder: () => true, // Allow pan gesture to be recognized
    })
  ).current;
  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <View style={styles.listContainer}>
        <Image
          uri={listing.images[0]}
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
