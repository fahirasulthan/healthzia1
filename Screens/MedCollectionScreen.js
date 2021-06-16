import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

function english() {}

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
      <Text style={{ fontWeight: "bold", textDecorationLine: "underline" }}>
        {" "}
        Your prescription is ready for collection!
      </Text>
      <Text style={{ marginTop: 5 }}>
        {" "}
        Please do the form below for your type of collection
      </Text>
      <View style={styles.titleContainer}>
        <Text style={styles.textInBox}> Collection type* </Text>
        <Text
          style={{
            fontSize: 100,
            marginTop: -90,
            marginLeft: -140,
          }}
        >
          {" "}
          .{" "}
        </Text>
        <Text style={{ marginTop: -40, marginLeft: -100 }}>
          {" "}
          Collect at Polyclinic{" "}
        </Text>
        <Text
          style={{
            fontSize: 100,
            marginTop: -90,
            marginLeft: -140,
          }}
        >
          {" "}
          .{" "}
        </Text>
        <Text style={{ marginTop: -40, marginLeft: -100 }}> Delivery </Text>
        <Text style={{ marginTop: 10, marginLeft: -100 }}>
          {" "}
          Address for delivery{" "}
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Address"
              placeholderTextColor="#003f5c"
              onChangeText={(address) => setAddress(address)}
            />
          </View>
        </Text>
        <Text style={{ marginTop: 10, marginLeft: -100 }}>
          {" "}
          Delivery Timing{" "}
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Timing"
              placeholderTextColor="#003f5c"
              onChangeText={(timing) => setTiming(timing)}
            />
          </View>
        </Text>
        <Button
          style={styles.loginBtn}
          onPress={() => alert("Form Submitted!")}
          title="Submit Form"
        />
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
    backgroundColor: "#D6D6D6",
    padding: 230,
    marginTop: 20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 30,
  },
  image: {
    width: 50,
    height: 50,
  },
  textInBox: {
    marginTop: -230,
    marginLeft: -120,
    fontSize: 15,
  },
  inputView: {
    backgroundColor: "#FFFF",
    borderRadius: 30,
    width: "80%",
    height: 30,
    marginLeft: 0,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 0,
  },
});
