import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import { Colors } from "react-native/Libraries/NewAppScreen";

function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/bgimg2.jpg")}
      style={styles.backgroundContainer}
    >
      <Image source={require("../assets/logo2.png")} style={styles.logo} />
      <AppButton title="Login" bgcolor="primary" handlePress={() => {}} />
      <AppButton title="Register" bgcolor="secondary" handlePress={() => {}} />
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: "flex-end",
    position: "relative",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 100,
  },
  
});

export default WelcomeScreen;
