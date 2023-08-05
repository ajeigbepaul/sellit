import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screen/AccountScreen";
import MessageScreen from "../screen/MessageScreen";
import LoginScreen from "../screen/LoginScreen";
import ProfileImage from "../screen/ProfileImage";


const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Messages" component={MessageScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Uploadprofile" component={ProfileImage} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
