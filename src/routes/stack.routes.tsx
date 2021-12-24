import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Book from "../screens/Book";
import Section from "../screens/Section";

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />

      <Screen name="Book" component={Book} />

      <Screen name="Section" component={Section} />
    </Navigator>
  );
}
