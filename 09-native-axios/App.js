import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PopularMovies from "./screen/PopularMovies";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <PopularMovies />
        <StatusBar style="light"  />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E"
  },
});
