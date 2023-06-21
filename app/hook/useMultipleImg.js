import React, { useState } from "react";
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useFormikContext } from "formik";

export default function useMultipleImg() {
  const { errors, setFieldValue, touched,} = useFormikContext();
  const [imageUris, setImageUris] = useState([]);
  const [newImg, setNewImg] = useState(null);

  const onChangeImage = (assets) => {
    setImageUris(assets);
    if (assets.length > 0) {
      setNewImg(assets[0].uri);
    } else {
      setNewImg(null);
    }
    setFieldValue("images", assets);
  };

  const handleRemove = (removedImageUri) => {
    setImageUris((prevImageUris) =>
      prevImageUris.filter((uri) => uri.uri !== removedImageUri)
    );
   setFieldValue(
     "images",
     imageUris.filter((uri) => uri.uri !== removedImageUri)
   );
  };

  const handleAdd = async () => {
    try {
      const { assets } = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!assets.canceled) {
        onChangeImage([...imageUris, ...assets]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePress = (removedImageUri) => {
    if (!newImg) {
      handleAdd();
    } else {
      Alert.alert("Delete", "Are you sure you want to delete this image", [
        {
          text: "Yes",
          onPress: () => {
            handleRemove(removedImageUri);
          },
        },
        { text: "No" },
      ]);
    }
  };

  return { handleAdd, handlePress, imageUris,errors,touched};
}
