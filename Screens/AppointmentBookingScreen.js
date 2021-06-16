import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function AppointmentBookingScreen() {
  function datesNtime() {}

  function datesNtime1() {}

  function datesNtime2() {}

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://i.pinimg.com/236x/a8/6e/55/a86e55f50e63b73c8a28dfa5aa40defb.jpg",
        }}
      />

      <Text style={styles.text}>Appoinment Booking</Text>
      <View style={styles.titleContainer}></View>
      <View style={styles.middleContainer}></View>

      <View style={styles.box}>
        <Text style={styles.subtitle}>Dates and time available</Text>
        <Text style={styles.subtitle1}>
          <TouchableOpacity style={styles.buttonContainer} onPress={datesNtime}>
            <Text style={styles.buttonText}></Text>
          </TouchableOpacity>{" "}
          Weekday
        </Text>
        <Text style={styles.subtitle2}>
          <TouchableOpacity style={styles.buttonContainer} onPress={datesNtime}>
            <Text style={styles.buttonText}></Text>
          </TouchableOpacity>
          Weekend
        </Text>
        <Text style={styles.subtitle3}>Dates Available</Text>
        <TouchableOpacity style={styles.buttonContainer1} onPress={datesNtime1}>
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity>
        <Text style={styles.subtitle3}>Timing Available</Text>
        <TouchableOpacity style={styles.buttonContainer1} onPress={datesNtime1}>
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer2} onPress={datesNtime2}>
          <Text style={styles.buttonText1}>Submit Form</Text>
        </TouchableOpacity>
      </View>
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
    backgroundColor: "#E2FFDB",
    padding: 5,
    justifyContent: "space-around",
    margin: 10,
  },
  text: {
    fontWeight: "",
    fontSize: 20,
  },
  image: {
    width: 50,
    height: 50,
  },
  box: {
    backgroundColor: "#D6D6D6",
    padding: 170,
    paddingBottom: 10,
    flex: 10,
  },
  subtitle: {
    color: "black",
    fontSize: 12,
    marginTop: -160,
    marginLeft: -160,
  },
  subtitle1: {
    color: "black",
    fontSize: 12,
    alignSelf: "flex-start",
  },
  subtitle2: {
    color: "black",
    fontSize: 12,
    alignSelf: "flex-start",
  },
  subtitle3: {
    color: "black",
    fontSize: 12,
    alignSelf: "flex-start",
    marginLeft: -160,
  },
  buttonContainer: {
    backgroundColor: "#FFFFFF",
    padding: 4,
    borderRadius: 10,
    margin: 3,
    marginLeft: -150,
    alignSelf: "flex-start",
  },
  buttonContainer1: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 0,
    margin: 3,
    marginLeft: -160,
    alignSelf: "flex-start",
    width: 100,
  },
  buttonContainer2: {
    backgroundColor: "#C9FEBC",
    padding: 10,
    borderRadius: 0,
    margin: 3,
    marginLeft: -160,
    marginTop: 50,
    alignSelf: "flex-start",
    width: 150,
  },
  buttonText1: {
    color: "black",
    fontSize: 15,
    textAlign: "centre",
    margin: 19,
  },
});
