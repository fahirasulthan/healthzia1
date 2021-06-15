import React from "react";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [pssword, setPassword] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={style.contanier}>
        <Text style={style.title}>Healthzia</Text>
        <Text style={StyleSheet.fieldTitle}>Email</Text>
        <TextInput
          style={style.input}
          placeholder="Enter Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={StyleSheet.fieldTitle}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={tyles.loginButton} onPress={null}>
          <Text style={style.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}
