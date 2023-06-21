import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect } from "react";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function ImageInput({ imgUri, handlePress }) {
     useEffect(() => {
       requestPermission();
     }, []);
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to allow permission");
  };
 
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imgUri && (
          <MaterialCommunityIcons
            name="camera"
            color={colors.medium}
            size={36}
          />
        )}
        {imgUri && <Image source={{ uri: imgUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 70,
    borderRadius: 10,
    backgroundColor: colors.light,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
