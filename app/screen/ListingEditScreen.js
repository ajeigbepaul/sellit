import { View, Text, StyleSheet } from "react-native";
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
  const [location, setLocation] = useState();
  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    getLocation();
  }, []);
  return (
    <Screen style={styles.screen}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(values)}
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
