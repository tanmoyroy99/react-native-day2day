import React from "react"
import { View, StyleSheet, TouchableOpacity } from "react-native"
import colors from "../config/colors"
import {MaterialCommunityIcons} from "@expo/vector-icons"

function NewListingButton({onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
        <View style={styles.contaner}>
            <MaterialCommunityIcons 
            name="plus-circle" 
            size={40}
            color={colors.white}
             />
        </View>
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    contaner:{
        alignItems:"center",
        backgroundColor: colors.primary,
        borderColor: colors.white,
        borderRadius: 40,
        bottom: 35,
        borderWidth: 10,
        height: 80,
        width: 80,
        justifyContent: "center"
    }
})

export default NewListingButton