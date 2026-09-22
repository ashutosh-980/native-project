import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import FlatCard from "./screens/FlatCard";
import ImageCard from "./screens/ImageCard";
import TrendingPlaces from "./screens/TrendingPlaces";
import BlogCard from "./screens/BlogCard";
import Contact from "./screens/Contact";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <FlatCard />
          <ImageCard />
          <TrendingPlaces />
          <BlogCard />
          <Contact />
          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
