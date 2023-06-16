import { Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

export default function LoginScreen() {
     const [email, setEmail] = useState();
     const [password, setPassword] = useState();
  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo2.png")} style={styles.logo} />
      <AppTextInput
        icon="email"
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <AppButton title="Login" bgcolor="primary" handlePress={() => console.log(email,password)} />
    </Screen>
  );
}

const styles = StyleSheet.create({
    container:{
padding:10
    },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop:50,
    marginBottom:50
  },
});
