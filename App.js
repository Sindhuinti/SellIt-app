import React from "react";
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from "./app/navigation/AuthNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import Screen from "./app/components/Screen";
import ListingScreen from "./app/screens/ListingScreen";

export default function App() {

  return (
    <NavigationContainer theme={NavigationTheme}>
   <AppNavigator/>
  </NavigationContainer>
  
      
  );
}




