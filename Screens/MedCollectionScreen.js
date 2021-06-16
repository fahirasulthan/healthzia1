import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function AppointmentBookingScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://i.pinimg.com/236x/a8/6e/55/a86e55f50e63b73c8a28dfa5aa40defb.jpg",
        }}
      />
      <Text style={styles.text}>Medicine Collection</Text>

      <View style={styles.titleContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ECF3DD",
  },
  titleContainer: {
    backgroundColor: "#fff",
    padding: 5,
    margin: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 30,
  },
  image: {
    width: 50,
    height: 50,
  },
});
