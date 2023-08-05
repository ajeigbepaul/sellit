import { Alert, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import Screen from "../components/Screen";
import AppFormField from "../components/form/AppFormField";
import SubmitButton from "../components/form/SubmitButton";
import AppFormPicker from "../components/form/AppFormPicker";
import AppForm from "../components/form/AppForm";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/form/FormImagePicker";
import * as Location from "expo-location";
import useAxiosPrivate from "../hook/useAxios";
import UploadScreen from "./UploadScreen";
// import useMultipleImg from "../hook/useMultipleImg";
const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().required().min(1).label("Description"),
  category: Yup.object().required().nullable().label("Catgory"),
  images: Yup.array().min(1, "Please select at least one image"),
});

const categories = [
  {
    label: "Jeans",
    value: 1,
    backgroundColor: "red",
    icon: "apps",
    iconColor: "white",
  },
  {
    label: "Watch",
    value: 2,
    backgroundColor: "green",
    icon: "email",
    iconColor: "white",
  },
  {
    label: "Shoe",
    value: 3,
    backgroundColor: "blue",
    icon: "lock",
    iconColor: "white",
  },
];
export default function ListingEditScreen() {
  const [visibleUpload, setVisibleUpload] = useState(false);
  const [progress, setProgress] = useState(0);
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const axiosPrivate = useAxiosPrivate(); // POST LISTINGS
  
  const handleSubmit = async (listing, {resetForm}) => {
    try {
      // Ensure listing is not empty and has all required fields
      if (
        !listing.title ||
        !listing.price ||
        !listing.category ||
        !listing.description ||
        !listing.images
      ) {
        console.error("Invalid listing data:", listing);
        return alert(
          "Invalid listing data. Please fill in all required fields."
        );
      }
      const formData = new FormData();
      formData.append("title", listing.title);
      formData.append("price", listing.price);
      formData.append("category", listing.category.value);
      formData.append("description", listing.description);

      listing.images.forEach((image, index) =>
        formData.append("images", {
          name: image + index,
          type: "image/jpeg",
          uri: image.uri,
        })
      );
      // if (location) formData.append("location", location);
      console.log(formData);
      setProgress(0);
      setVisibleUpload(true);
      const res = await axiosPrivate.post("/listing", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const progress = progressEvent.loaded / progressEvent.total;
          setProgress(progress);
        },
      });
      setVisibleUpload(false);
      console.log(res.data);
      if (!res.data) 
        return alert("Could not save the listings");
      resetForm()
      // resetImagePicker()
      // alert("Success");
    } catch (error) {
      console.error("Error:", error.message);

      // Handle error here
    }
  };
  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      console.log(granted);
      if (!granted) {
        Alert.alert("Location permission not granted.");
        return;
      }

      // const locationData = await Location.getLastKnownPositionAsync();
      // if (locationData) {
      //   const { latitude, longitude } = locationData.coords;
      //  setLocation({ latitude, longitude });
      // } else {
      //   Alert.alert("Location data not available.");
      // }
      const locationData = await Location.watchPositionAsync({}, (location) => {
        const { latitude, longitude } = location.coords;
        setLocation({ latitude, longitude });
      });

      locationData.remove();
    } catch (error) {
      console.log("Error getting location:", error);
      Alert.alert("Error getting location.");
    }
  };
  useEffect(() => {
    getLocation();
  }, []);
  useEffect(() => {
    console.log("Location:", location);
  }, [location]);
  return (
    <Screen style={styles.screen}>
      <UploadScreen progress={progress} visible={visibleUpload} />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
        />
        <AppFormPicker
          items={categories}
          numberOfColumns={3}
          name="category"
          placeholder="Category"
          PickerItemComponent={CategoryPickerItem}
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" bgcolor="primary" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 15,
  },
});
