import { View, Text } from "react-native";
import React from "react";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";

export default function SubmitButton({ title, bgcolor, }) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton title={title} bgcolor={bgcolor} onPress={handleSubmit} />
  );
}
