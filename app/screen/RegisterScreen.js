import { Image, StyleSheet } from "react-native";
import React from "react";
import * as Yup from "yup";
import Screen from "../components/Screen";
import AppFormField from "../components/form/AppFormField";
import SubmitButton from "../components/form/SubmitButton";
import AppForm from "../components/form/AppForm";
import client from "../api/client";
const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
export default function RegisterScreen({ navigation }) {
  const handleRegister = async (values) => {
    try {
      const res = await client.post("/users", {
        ...values,
      });
      console.log(res.data);
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo2.png")} style={styles.logo} />

      <AppForm
        initialValues={{ email: "", password: "", username: "" }}
        onSubmit={handleRegister}
        validationSchema={validationSchema}
      >
        <AppFormField icon="account" placeholder="Username" name="username" />
        <AppFormField icon="email" placeholder="Email" name="email" />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          name="password"
          secureTextEntry={true}
        />
        <SubmitButton title="Register" bgcolor="primary" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 50,
  },
});
