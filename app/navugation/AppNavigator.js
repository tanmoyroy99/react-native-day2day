import React from "react"
import { createBottomTabNavigator }from "@react-navigation/bottom-tabs"
import { MaterialCommunityIcons }from "@expo/vector-icons"

import routs from './routs'
import ListingEditScreen from "../screen/ListingEditScreen";
import AccountScreen from "../screen/AccountScreen";
import FeedNavigator from './FeedNavigator'
import NewListingButton from "./NewListingButton";
import DayToDayInfoScreen from "../screen/DayToDayInfoScreen";

const Tab = createBottomTabNavigator();

const AppNavigator =()=>(
    <Tab.Navigator>
        <Tab.Screen 
            name={routs.FEED}
            component={FeedNavigator}
            options={{
                tabBarIcon: ({color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} /> 
            }}
            />
        <Tab.Screen 
            name={routs.LISTING_EDIT}
            component={ListingEditScreen}
            options={ ({ navigation })=> ({
                tabBarButton: ()=> <NewListingButton onPress={()=>{navigation.navigate(routs.LISTING_EDIT)}} />,
                tabBarIcon: ({color, size }) => <MaterialCommunityIcons name="plus-circle" color={color} size={size} /> 
            })}
            />
        <Tab.Screen 
            name={routs.ADD_DAY_TO_DAY}
            component={DayToDayInfoScreen}
            options={ ({ navigation })=> ({
                tabBarButton: ()=> <NewListingButton onPress={()=>{navigation.navigate(routs.ADD_DAY_TO_DAY)}} />,
                tabBarIcon: ({color, size }) => <MaterialCommunityIcons name="plus-circle" color={color} size={size} /> 
            })}
            />
        <Tab.Screen 
            name={routs.ACCOUNT}
            component={AccountScreen}
            options={{
                tabBarIcon: ({color, size }) => <MaterialCommunityIcons name="account" color={color} size={size} /> 
            }}
            
            />
    </Tab.Navigator>
)

export default AppNavigator