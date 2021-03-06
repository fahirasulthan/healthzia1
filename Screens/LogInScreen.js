import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import HomeScreen from "./HomeScreen";

function HomeScreen1({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="NRIC"
          placeholderTextColor="#3D3A30"
          onChangeText={(nric) => setNRIC(nric)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#3D3A30"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <Button
        title="Forget Password?"
        onPress={() => navigation.navigate("Forget Password")}
      />

      <Button title="LOGIN" onPress={() => navigation.navigate("Homescreen")} />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="NRIC"
          placeholderTextColor="#3D3A30"
          onChangeText={(nric) => setNRIC(nric)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="New Password"
          placeholderTextColor="#3D3A30"
          secureTextEntry={true}
          onChangeText={(password) => setNewPassword(password)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password"
          placeholderTextColor="#3D3A30"
          secureTextEntry={true}
          onChangeText={(password) => setConfirmPassword(password)}
        />
      </View>

      <Button
        style={styles.loginBtn}
        onPress={() => alert("Verification Sent!")}
        title="Reset Password"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECF3DD",
    alignItems: "center",
    justifyContent: "center",
  },

  inputView: {
    backgroundColor: "#C5B893",
    borderRadius: 30,
    width: 200,
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#ECE8DA",
  },

  inputView: {
    backgroundColor: "#C5B893",
    borderRadius: 30,
    width: 200,
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
});

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Login" component={HomeScreen1} />
      <Stack.Screen name="Forget Password" component={DetailsScreen} />
      <Stack.Screen name="Homescreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default App;
