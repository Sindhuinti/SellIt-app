import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import {AppForm,AppFormField,SubmitButton} from '../components/forms';

const validationSchema = Yup.object().shape({
    email:Yup.string().required().email().label("Email"),
    password:Yup.string().required().min(4).label("Password"),
})


function LoginScreen(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <Screen style={styles.container}>
            <Image 
            style={styles.logo}
            source={require("../assets/logo-red.png")}/>

            <AppForm
            initialValues={{email:"",password:""}}
            onSubmit={(values)=> console.log(values)}
            validationSchema={validationSchema}
            >
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