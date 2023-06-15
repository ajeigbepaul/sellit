import { View, Text, StyleSheet, Pressable, TouchableWithoutFeedback } from "react-native";
import React from "react";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function SwipeView({onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>

    <View style={styles.swipe}>
      <MaterialCommunityIcons name="trash-can" size={30} color="white" />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  swipe: {
    width: 70,
    backgroundColor: colors.danger,
    justifyContent:'center',
    alignItems:'center'

  },
});
