import * as React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import QRCodeScannerScreen from "./QRCodeScannerScreen";
import AppointmentBookingScreen from "./AppointmentBookingScreen";
import MedCollectionScreen from "./MedCollectionScreen";
import SettingsScreen from "./SettingsScreen";

function More({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://i.pinimg.com/236x/a8/6e/55/a86e55f50e63b73c8a28dfa5aa40defb.jpg",
        }}
      />
      <Button
        style={styles.Button}
        title="TraceTogether QR Code Scanner"
        onPress={() => navigation.navigate("QR Code Scanner")}
      />
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
  Button: {
    backgroundColor: "red",
  },
});

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator initialRouteName="App">
      <Stack.Screen name="More" component={More} />
      <Stack.Screen name="QR Code Scanner" component={QRCodeScannerScreen} />
    </Stack.Navigator>
  );
}

export default App;
