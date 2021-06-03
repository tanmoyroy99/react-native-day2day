import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import ListingsScreen from "../screen/ListingsScreen";
import DayToDayListScreen from "../screen/DayToDayListScreen";
import ListingDetailsScreen from "../screen/ListingDetailsScreen";

const Stact = createStackNavigator();

const FeedNavigator = ()=>(

    <Stact.Navigator mode="modal" screenOptions={{headerShown:false} }>
        <Stact.Screen name="Listing" component={DayToDayListScreen} />
        <Stact.Screen name="listingDetails" component={ListingDetailsScreen} />
    </Stact.Navigator>
)

export default FeedNavigator;