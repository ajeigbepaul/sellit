import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../config/colors";

function AppButton({ title, handlePress, bgcolor }) {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.button, { backgroundColor: colors[bgcolor] }]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    marginVertical: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 18,
  },
});
export default AppButton;
