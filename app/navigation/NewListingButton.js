import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function NewListingButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={colors.white}
          size={30}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 35,
    backgroundColor: colors.primary,
    bottom: 20,
    borderColor: colors.white,
    borderWidth: 7,
    height: 70,
    justifyContent: "center",
    width: 70,
  },
});
