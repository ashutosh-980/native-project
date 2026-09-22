import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";

const ImageCard = () => {
  const images = [
    {
      id: "1",
      title: "Mountain",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800",
    },
    {
      id: "2",
      title: "Forest",
      image:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800",
    },
    {
      id: "3",
      title: "Ocean",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    },
    {
      id: "4",
      title: "Desert",
      image:
        "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800",
    },
    {
      id: "5",
      title: "Lake",
      image:
        "https://images.unsplash.com/photo-1439853949127-fa647821eba0?w=800",
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Elevated Cards</Text>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.cardContainer}>
              <ImageBackground
                source={{ uri: item.image }}
                style={{
                  height: 150,
                  width: 200,
                  overflow: "hidden",
                  borderRadius: 10,
                }}
              >
                <View style={styles.textContainer}>
                  <Text style={styles.innerText}>{item.title}</Text>
                </View>
              </ImageBackground>
            </View>
          );
        }}
        horizontal={true}
        ItemSeparatorComponent={() => <View style={{ width: 5 }}></View>}
      />
    </View>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
  },
  cardContainer: {
    height: 150,
    width: 200,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 25,
    marginVertical: 15,
    marginHorizontal: 10,
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 15,
  },
  innerText: {
    fontSize: 22,
    fontWeight: "semibold",
    color: "white",
  },
});
