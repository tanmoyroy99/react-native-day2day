import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { StyleSheet, Text, View } from 'react-native';

import WelcomeScreen from './app/screen/WelcomeScreen'
import LoginScreen from './app/screen/LoginScreen'
import ListingsScreen from './app/screen/ListingsScreen'
import AccountScreen from './app/screen/AccountScreen'
import ListingDetailsScreen from './app/screen/ListingDetailsScreen'
import ListingEditScreen from './app/screen/ListingEditScreen'
import MessagesScreen from './app/screen/MessagesScreen'
import ViewImageScreen from './app/screen/ViewImageScreen'
import DayToDayListScreen from './app/screen/DayToDayListScreen'
import OfflineNotice from './app/components/OfflineNotice'

import AuthNavigator from './app/navugation/AuthNavigator'
import navigationTheme from './app/navugation/navigationTheme';
import AppNavigator from './app/navugation/AppNavigator';
import AuthContext from './app/auth/context'
import useLoading from './app/hooks/useLoading'


export default function App() {
  const [user, setUser]=useState()
  
  return (
    <AuthContext.Provider value={{user,setUser}}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme} >
        {/* {user?<AppNavigator />:<AuthNavigator />} */}
        <AppNavigator />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}


