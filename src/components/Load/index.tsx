import React from "react";
import { ActivityIndicator } from "react-native";
import theme from "../../global/style/theme";

export function Load() {
  return (
    <ActivityIndicator
      color={theme.colors.gray3}
      size={"large"}
      style={{ flex: 1 }}
    />
  );
}
