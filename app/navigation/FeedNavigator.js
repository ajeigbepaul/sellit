import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingScreen from "../screen/ListingScreen";
import ListingDetailsScreen from "../screen/ListingDetailsScreen";

const Stack = createStackNavigator()

const FeedNavigator = () =>{
    return (
      <Stack.Navigator screenOptions={{ presentation: "transparentModal", headerShown:false }}>
        <Stack.Screen
          name="Listing"
          component={ListingScreen}
          
        />
        <Stack.Screen
          name="ListingDetails"
          component={ListingDetailsScreen}
         
        />
      </Stack.Navigator>
    );
}

export default FeedNavigator