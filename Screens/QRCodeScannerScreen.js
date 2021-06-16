import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Button,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Could not finish :'(</Text>
      <StatusBar style="auto" />
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
});
