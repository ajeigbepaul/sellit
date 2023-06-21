import useMultipleImg from "../../hook/useMultipleImg";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

export default function FormImagePicker({name}) {
    const { errors,touched } = useMultipleImg();
  return (
    <>
      <ImageInputList />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}