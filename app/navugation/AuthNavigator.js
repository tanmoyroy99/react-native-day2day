import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import routs from './routs'
import WelcomeScreen from '../screen/WelcomeScreen'
import LoginScreen from '../screen/LoginScreen'

const Stact = createStackNavigator();

const AuthNavigator = ()=>(

    <Stact.Navigator>
        <Stact.Screen name={routs.WELCOME} component={WelcomeScreen} options={{headerShown:false}} />
        <Stact.Screen name={routs.LOGIN} component={LoginScreen} />
    </Stact.Navigator>
)

export default AuthNavigator;