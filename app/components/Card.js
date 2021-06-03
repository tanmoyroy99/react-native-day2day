import React from "react";
import { View, StyleSheet, Image, TouchableNativeFeedback, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome, AntDesign, MaterialIcons } from '@expo/vector-icons'; 
import Moment from 'react-moment';


import Text from "./Text";
import colors from "../config/colors";

function Card({ title, ammount,calendar, subTitle, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.card}>
      {image && <Image style={styles.image} source={image} />}
      <View style={styles.detailsContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        {calendar && <Text style={styles.title} numberOfLines={1}>
        <AntDesign name="calendar" size={18} color="black" />
           <Moment format="DD/MM/YYYY">{new Date(Number(calendar))}</Moment>
        </Text>}
        {ammount && <Text style={styles.ammount} numberOfLines={1}>
        <FontAwesome name="rupee" size={18} color={colors.secondary} /> {ammount}
        </Text> }
        <Text style={styles.subTitle} numberOfLines={20}>
         {subTitle}
        </Text>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  ammount: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  subTitle: {
    color: colors.black,
    // fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
