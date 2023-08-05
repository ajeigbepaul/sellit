import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import AuthNavigator from "../navigation/AuthNavigator";
import AppNavigator from "../navigation/AppNavigator";
import useAuth from "../hook/useAuth";
import authStorage from "../contextapi/storage";

// Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

export default function Main() {
  const { auth, setAuth } = useAuth();
  const user = auth?.email;
  const restoreUser = async () => {
    const User = await authStorage.getUser();
    if (User) return setAuth(User);
  };

  // SPLASH SCREEN
  const initializeApp = async () => {
    try {
      await SplashScreen.preventAutoHideAsync();
      await restoreUser();
      await SplashScreen.hideAsync();
    } catch (error) {
      console.log("Error initializing app:", error);
    }
  };
  useEffect(() => {
    initializeApp();
  }, []);

  return <>{user ? <AppNavigator /> : <AuthNavigator />}</>;
}
