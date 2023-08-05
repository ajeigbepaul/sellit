import { Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import Screen from "../components/Screen";
import AppFormField from "../components/form/AppFormField";
import SubmitButton from "../components/form/SubmitButton";
import AppForm from "../components/form/AppForm";
import useAuth from "../hook/useAuth";
import client from "../api/client";
import ErrorMessage from "../components/form/ErrorMessage";
import authStorage from "../contextapi/storage"
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
export default function LoginScreen({navigation}) {
  const {setAuth} = useAuth()
  const [error, setError] = useState(false)
  const handleLogin = async(values)=>{
    try {
       const res = await client.post("/auth", {
         ...values,
       });
       const accessToken = res?.data?.accessToken;
       const email = res?.data?.email;
       const id = res?.data?._id;
       setAuth({accessToken,id,email})
       authStorage.storeToken(accessToken);
      //  navigation.navigate("App");
      //  console.log(res.data);
    } catch (error) {
     if (
       error.response &&
       error.response.status >= 400 &&
       error.response.status <= 500
     ) {
       setError(error.response.data.message);
     }
    }
 
  }
  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo2.png")} style={styles.logo} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleLogin}
        validationSchema={validationSchema}
      >
        <AppFormField icon="email" placeholder="Email" name="email" />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          name="password"
          secureTextEntry={true}
        />
        <ErrorMessage error="Invalid Email or Password" visible={error} />
        <SubmitButton title="Login" bgcolor="primary" />
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
