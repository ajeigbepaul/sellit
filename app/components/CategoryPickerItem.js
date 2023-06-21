import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "./Icon";
import AppText from "./AppText";
import colors from "../config/colors";

export default function CategoryPickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon
        name={item.icon}
        backgroundColor={item.backgroundColor}
        iconColor={item.iconColor}
        size={60}
      />
      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    color: colors.medium,
  },
});
