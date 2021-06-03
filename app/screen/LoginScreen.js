import React, { useContext, useState } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import jwt_decode from "jwt-decode";

import Screen from "../components/Screen";
import {ErrorMessage, Form, FormField, SubmitButton } from "../components/forms";
import authAPI from './../api/auth';
import ProcessiongScreen from './ProcessiongScreen'
import AuthContext from "../auth/context";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {

  const [loginFaild,setLoginFaild]=useState(false)
  const [showProcessiong,setshowProcessiong]=useState(false)
  const [progress, setProgress] = useState(0);
  const authContext=useContext(AuthContext)

  const handelSubmit = async ({email,password})=>{
    setLoginFaild(false);
    setshowProcessiong(true)
    setProgress(0)
    
    const result = await authAPI.login(email,password, (progress)=> {
      console.log('-->>>',progress)
      setProgress(progress)
    });

    setshowProcessiong(false)
    if(!result.ok) return setLoginFaild(true);

    const user = jwt_decode(result.data)
    authContext.setUser(result.data)
    console.log(user);
  }

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <ErrorMessage visible={loginFaild} error="Email/Password are not Valid"/>
      <ProcessiongScreen progress={progress} visible={showProcessiong} />

      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={handelSubmit}
        validationSchema={validationSchema}
      >
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
