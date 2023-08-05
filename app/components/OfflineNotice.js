import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";
const OfflineNotice = () => {
  const netinfo = useNetInfo();
  console.log(netinfo);
  if (netinfo.type !== "unknown" && netinfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText>No internet connection</AppText>
      </View>
    );
    return null
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    position: "absolute",
    width: "100%",
    zIndex: 1,
    top: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default OfflineNotice;
