import React from "react";
import { Modal, Text, View, StyleSheet } from "react-native";
import AppText from "../components/Text";
// import * as Progress from 'react-native-progress';


function ProcessiongScreen({progress=0, visible}){
    return(
        <Modal visible={visible} >
            <View style={styles.container}>
            {/* <Progress.Bar progress={progress} width={200} /> */}
            {/* <Progress.Bar progress={0.3} width={200} /> */}
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        flex:1,
        justifyContent:"center"
    }
})

export default ProcessiongScreen
