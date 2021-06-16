import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LogInScreen from "./Screens/LogInScreen";

function StartScreen({ navigation }) {
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
        title="LogIn page"
        onPress={() => navigation.navigate("Log-In Page")}
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
  image: {
    width: 200,
    height: 200,
  },
  Button: {
    backgroundColor: "red",
  },
});

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App">
        <Stack.Screen name="Welcome" component={StartScreen} />
        <Stack.Screen name="Log-In Page" component={LogInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
