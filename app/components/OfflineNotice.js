import React from "react";
import { View , StyleSheet} from "react-native";
import Constants from "expo-constants"
import colors from "../config/colors";
import AppText from "./Text";
import {useNetInfo} from "@react-native-community/netinfo";

function OfflineNotice(){
    const newInfo = useNetInfo()
    if(newInfo.type !== 'unknown' && newInfo.isInternetReachable === false){
        return(
            <View style={styles.contaner}>
                <AppText style={styles.test}>No Internet Connection</AppText>
            </View>
        )
    }

    return null;
}

const styles= StyleSheet.create({
    contaner:{
        alignItems:"center",
        backgroundColor: colors.primary,
        height: 50,
        justifyContent: "center",
        position:"absolute",
        top: Constants.statusBarHeight,
        width:"100%",
        zIndex: 1,
    },
    test: {
        color: "#fff"
    }
})

export default OfflineNotice;