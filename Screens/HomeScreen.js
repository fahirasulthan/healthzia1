import * as React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import QRCodeScannerScreen from "./QRCodeScannerScreen";
import AppointmentBookingScreen from "./AppointmentBookingScreen";
import MedCollectionScreen from "./MedCollectionScreen";
import SettingsScreen from "./SettingsScreen";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://i.pinimg.com/236x/a8/6e/55/a86e55f50e63b73c8a28dfa5aa40defb.jpg",
        }}
      />
      <Text style={styles.DA}>Daily Announcements</Text>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>TODAY - 16 JUN</Text>
        <Text style={styles.text}>19 confirmed community cases</Text>
        <Text style={styles.text}>5 imported cases - placed on SHN</Text>
        <Text style={styles.title}>YESTERDAY - 15 JUN</Text>
        <Text style={styles.text}>14 confirmed community cases</Text>
        <Text style={styles.text}>0 imported cases</Text>
      </View>
      <Text style={styles.SC}>Shortcuts</Text>
      <View style={styles.fillerContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECF3DD",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
  DA: {
    textDecorationLine: "underline",
    marginTop: 7,
    marginBottom: 3,
    fontSize: 20,
  },
  titleContainer: {
    backgroundColor: "white",
    paddingTop: 5,
    paddingBottom: 50,
    paddingLeft: 250,
    paddingRight: 250,
  },
  title: {
    marginLeft: -150,
    fontWeight: "Bold",
    fontSize: 20,
  },
  text: {
    marginTop: 5,
    marginLeft: -130,
    fontSize: 15,
  },
  SC: {
    textDecorationLine: "underline",
    marginTop: 7,
    marginBottom: 3,
    marginLeft: -200,
    fontSize: 13.8,
  },
  fillerContainer: {
    backgroundColor: "white",
    paddingBottom: 80,
    paddingLeft: 250,
    paddingRight: 250,
  },
});

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="QR Scanner" component={QRCodeScannerScreen} />
      <Tab.Screen name="Booking " component={AppointmentBookingScreen} />
      <Tab.Screen name="Collection" component={MedCollectionScreen} />
      <Tab.Screen name="Setting" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
