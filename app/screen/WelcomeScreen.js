import React from "react";
import { Image, ImageBackground, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";


function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/bgimg2.jpg")}
      style={styles.backgroundContainer}
    >
      <Image source={require("../assets/logo2.png")} style={styles.logo} />
      <AppButton
        title="Login"
        bgcolor="primary"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
      <AppButton
        title="Register"
        bgcolor="secondary"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
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
