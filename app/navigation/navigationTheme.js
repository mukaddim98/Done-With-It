import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors";
import { color } from "react-native-reanimated";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
  },
};
