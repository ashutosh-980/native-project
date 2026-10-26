import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

const Home = ({ navigation }) => {
  const [text, setText] = useState("");

  // To Clear the Text Input Field
  useFocusEffect(
    useCallback(() => {
      setText("");
    }, []),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.homeText}>Home</Text>

      {/* Text Input field */}
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Enter your name"
        style={styles.inputText}
      />

      {/* Profile Button */}
      <Pressable
        style={({ pressed }) => [styles.btn, pressed && styles.pressedBtn]}
        onPress={() => navigation.navigate("Profile", { name: text })}
      >
        <Text style={styles.btnText}>Go To Profile</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e9d8d8",
  },
  homeText: {
    fontSize: 55,
    fontWeight: "bold",
    color: "#fff",
  },
  btn: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#00f",
    borderRadius: 25,
    backgroundColor: "#00f",
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  pressedBtn: {
    backgroundColor: "#3a567d",
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  inputText: {
    width: "70%",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#0000ff",
    borderRadius: 12,
    marginVertical: 12,
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
