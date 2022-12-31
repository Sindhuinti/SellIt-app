import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationTheme from './app/navigation/NavigationTheme';
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {

  return (
    <>

    <OfflineNotice/>
    <NavigationContainer theme={NavigationTheme}>
    <AppNavigator/>

    </NavigationContainer>
    </>
  );

  
}




