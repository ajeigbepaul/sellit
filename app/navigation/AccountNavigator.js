import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screen/AccountScreen";
import MessageScreen from "../screen/MessageScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen
        name="Messages"
        component={MessageScreen}
        
      />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
