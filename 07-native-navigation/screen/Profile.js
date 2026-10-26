import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const Profile = ({ navigation, route }) => {
  console.log(route.params.name);
  return (
    <View style={styles.container}>
      {/* Name text receives from Home Screen */}
      <Text style={styles.profileText}>
        {" "}
        {route.params.name
          ? `Hello 🙋, ${route.params.name}`
          : "No Profile Name"}{" "}
      </Text>

      {/* Back Button */}
      <Pressable
        style={({ pressed }) => [styles.btn, pressed && styles.pressedBtn]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.btnText}>Back</Text>
      </Pressable>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e9d8d8",
  },
  profileText: {
    marginHorizontal: 12,
    fontSize: 30,
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
});
