import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

function english() {}

function settingScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://i.pinimg.com/236x/a8/6e/55/a86e55f50e63b73c8a28dfa5aa40defb.jpg",
        }}
      />
      <Text style={styles.title}>Change Language</Text>
      <TouchableOpacity style={styles.buttonContainer} onPress={english}>
        <Text style={styles.buttonText}>English</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={english}>
        <Text style={styles.buttonText}>Chinese</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={english}>
        <Text style={styles.buttonText}>Malay</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={english}>
        <Text style={styles.buttonText}>Tamil</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Notification</Text>
      <Text style={styles.title}>Help</Text>
      <Text style={styles.title}>Contact Us</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ECF3DD",
  },
  image: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 25,
    justifyContent: "flex-start",
    alignSelf: "flex-start",
  },
  buttonContainer: {
    backgroundColor: "#E2FFDB",
    padding: 5,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "black",
    fontSize: 20,
  },
});

export default settingScreen;
