import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Icon from "./app/components/Icon";
import ListItems from "./app/components/ListItems";
import ListingCard from "./app/components/ListingCard";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/screen/AccountScreen";
import ListingDetailsScreen from "./app/screen/ListingDetailsScreen";
import ListingScreen from "./app/screen/ListingScreen";
import MessageScreen from "./app/screen/MessageScreen";
import ViewImageScreen from "./app/screen/ViewImageScreen";
import WelcomeScreen from "./app/screen/WelcomeScreen";
import LoginScreen from "./app/screen/LoginScreen";
import ListingEditScreen from "./app/screen/ListingEditScreen";
import { Alert, Button, Image } from "react-native";
import ImageInput from "./app/components/ImageInput";
import useImage from "./app/hook/useImage";
import ImageInputList from "./app/components/ImageInputList";
import { useState } from "react";
export default function App() {
  return (
    //  <WelcomeScreen/>
    // <ViewImageScreen/>
    // <ListingDetailsScreen/>
    // <MessageScreen/>
    // <AccountScreen/>
    // <ListingScreen/>
     <ListingEditScreen/>
    // <LoginScreen/>
   
  );
}
