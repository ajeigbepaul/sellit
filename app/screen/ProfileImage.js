import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import useAuth from "../hook/useAuth";
import useAxiosPrivate from "../hook/useAxios";
import { useNavigation } from "@react-navigation/native";
export default function ProfileImage() {
  const {auth} = useAuth()
  const navigation = useNavigation();
  const axiosPrivate = useAxiosPrivate();
  const [uploadArray, setUploadArray] = useState([]);
  const [imageuri, setImageuri] = useState("");
  // console.log(auth)
  console.log(imageuri);
  useEffect(() => {
    uploadArray.map((uri) => setImageuri(uri?.uri));
  }, [uploadArray]);
  const openImageLibrary = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permission");
      }

      if (status === "granted") {
        const { assets } = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          // You can reduce the size of the image here too.
          // There is already a reduction being done at the backend
          quality: 0.5,
        });
        if (!assets.canceled) setUploadArray(assets);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("profile", {
      name: new Date() + "_profile",
      uri: imageuri,
      type: "image/jpg",
    });
    console.log(formData);
    try {
      const res = await axiosPrivate.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data);
      navigation.navigate("Feed");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.uploadContainer}>
        <TouchableOpacity style={styles.upload} onPress={openImageLibrary}>
          {imageuri ? null : (
            <MaterialCommunityIcons
              name="camera"
              size={36}
              color={colors.medium}
            />
          )}
          {imageuri ? (
            <Image
              source={{ uri: imageuri }}
              style={{ width: "100%", height: "100%" }}
            />
          ) : (
            <Text style={styles.uploadText}>Profile Image</Text>
          )}
        </TouchableOpacity>
        <Text style={styles.nextBtn}>Skip</Text>
        {imageuri ? (
          <Text style={styles.uploadBtn} onPress={handleUpload}>
            Upload
          </Text>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.secondary,
  },
  nextBtn: { marginVertical: 5, fontSize: 16, color: colors.white },
  uploadBtn: {
    marginVertical: 5,
    fontSize: 16,
    color: colors.white,
    backgroundColor: "orange",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 6,
  },
  uploadContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  uploadText: {
    textAlign: "center",
    fontWeight: 500,
    color: colors.medium,
  },
  upload: {
    width: 120,
    height: 120,
    borderRadius: 50 / 2,
    borderWidth: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "dashed",
    borderColor: colors.white,
    overflow: "hidden",
  },
});
