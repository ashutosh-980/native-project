import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, useColorScheme, View } from "react-native";

export default function App() {
  const theme = useColorScheme();
  console.log(theme);
  return (
    <View
      style={[
        styles.container,
        theme === "light" ? styles.lightBackground : styles.darkBackground
      ]}
    >
      <Text style={theme === "light" ? styles.lightText : styles.darkText}>
        {theme.toUpperCase() + " " + "MODE"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  darkBackground: {
    backgroundColor: "black",
  },
  lightBackground: {
    backgroundColor: "white",
  },
  lightText: {
    color: "black",
    fontSize: 25,
  },
  darkText: {
    color: "white",
    fontSize: 25,
  },
});
