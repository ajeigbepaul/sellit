import React from "react";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";
export default function AppFormField({ name, ...otherProps }) {
  const { setFieldTouched,setFieldValue, values, touched, errors } = useFormikContext();
  // if you want to track the value. Just add the Values props and then 
  return (
    <>
      <AppTextInput
        value={values[name]}
        onChangeText={text=>setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
