import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function AppointmentBookingScreen() {
    return (
        <View style={styles.fillerContainer}>
            <View style={styles.titleContainer}>
            <Text style={styles.text}>Appoinment Booking</Text>
            <Image style={styles.image} source={{ uri: ''}} />
            </View>
            <View style={styles.fillerContainer}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(236, 243, 221)', 

},
titleContainer: {
    backgroundColor: 'rgb(226, 255, 219)',
    padding: 0,
    margin: 0,

},
text: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "top",
    color: "black",
},
image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 40,
}
}),
