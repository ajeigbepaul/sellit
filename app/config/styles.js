import { Platform } from "react-native";
import colors from "./colors";

export default {
  colors,
  text: {
    width:'100%',
    fontSize: 16,
    color: colors.medium,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
   
  },
};