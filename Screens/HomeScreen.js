import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
      <Text style={styles.SC}>Shortcuts</Text>
      <View style={styles.fillerContainer}></View>
    </View>
  );
}

function More() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECF3DD",
    alignItems: "center",
    justifyContent: "",
  },
  image: {
    width: 50,
    height: 50,
  },
  DA: {
    textDecorationLine: "underline",
    backgroundColor: "white",
    marginTop: 7,
    fontSize: 13.8,
    paddingTop: 5,
    paddingBottom: 300,
    paddingLeft: 100,
    paddingRight: 100,
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

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={More} />
    </Tab.Navigator>
  );
}
export default function App() {
  return <MyTabs />;
}
