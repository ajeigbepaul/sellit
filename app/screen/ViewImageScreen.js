import { View, Text, Image,StyleSheet} from 'react-native'
import React from 'react'
import colors from '../config/colors';
 function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.IconClose}></View>
      <View style={styles.iconDelete}></View>
      <Image resizeMode="contain" source={require("../assets/viewimg1.jpg")} />
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
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    top: 40,
    left: 30,
    zIndex: 999,
  },
  iconDelete: {
    position: "absolute",
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    top: 40,
    right: 30,
    zIndex: 999,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen