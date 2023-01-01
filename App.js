import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import NavigationTheme from './app/navigation/NavigationTheme';
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";

export default function App() {

  const [user,setUser] = useState();
 

  const restoreUser= async() =>{
    
    const user =  await authStorage.getUser();

    if(user) setUser(user);
    
  };

  useEffect(()=>{
    restoreUser();

  },[])

  

  

  return (
    <AuthContext.Provider value={{user,setUser}}>

    <OfflineNotice/>
    <NavigationContainer theme={NavigationTheme}>
    {user ? <AppNavigator/> : <AuthNavigator/>}

    </NavigationContainer>
    </AuthContext.Provider>
  );

  
}




