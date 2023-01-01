import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import authApi from '../api/auth';
import Screen from '../components/Screen';
import {ErrorMessage, AppForm,AppFormField,SubmitButton} from '../components/forms';
import useAuth from '../auth/useAuth';

const validationSchema = Yup.object().shape({
    email:Yup.string().required().email().label("Email"),
    password:Yup.string().required().min(4).label("Password"),
})


function LoginScreen(props) {
    const auth = useAuth();
    const [loginFailed,setLoginFailed] = useState(false);

    const handleSubmit = async({email,password}) =>{
      const result =  await authApi.login(email,password);
      if(!result.ok) return setLoginFailed(true);
      setLoginFailed(false);
      auth.logIn(result.data);

    }


    return (
        <Screen style={styles.container}>
            <Image 
            style={styles.logo}
            source={require("../assets/logo-red.png")}/>

            <AppForm
            initialValues={{email:"",password:""}}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            >
            <ErrorMessage error="Invalid email or password" visible={loginFailed}/>
             <AppFormField
                autoCapitalize="none"
                icon="email"
                autoCorrect={false}
                keyboardType="email-address"
                name="email"
                textContentType="emailAddress"
                placeholder="Email"
            />
            <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                name="password"
                secureTextEntry
                placeholder="Password"
                textContentType="password"
            />
            <SubmitButton title="Login"/>
            </AppForm>
            
        </Screen>
    );
}
const styles = StyleSheet.create({
    container:{
        padding:10,

    },
    logo:{
        width:80,
        height:80,
        alignSelf:"center",
        marginTop:20,
        marginBottom:20,
    }
    
})

export default LoginScreen;