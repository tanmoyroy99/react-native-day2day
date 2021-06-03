import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import routs from '../navugation/routs'
import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";
import dayTodayList from "../api/listing";
import useAPI from "../hooks/useApi"
import useLoading from '../hooks/useLoading'


function DayToDayListScreen({ navigation }) {
    const getListingAPI= useAPI(dayTodayList.listing)

    useEffect(()=>{
      console.log("useEffect")
      getListingAPI.request();
    },[])
    console.log('-->',getListingAPI.result);
  return (
    <Screen style={styles.screen}>
      {getListingAPI.isLoading}
      <FlatList
        data={getListingAPI.result}
        keyExtractor={(listingData) => listingData._id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.day2day_info}
            ammount={item.day2day_amount}
            calendar={item.datetime}
            subTitle={item.user_note}
            onPress={()=> navigation.navigate(routs.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default DayToDayListScreen;
