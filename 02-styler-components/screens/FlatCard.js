import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const FlatCard = () => {
  const data = [
    { id: 0, name: "Red" },
    { id: 1, name: "Green" },
    { id: 2, name: "Blue" },
    { id: 3, name: "Orange" },
    { id: 4, name: "Purple" },
    { id: 5, name: "Violet" },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Flat Cards</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View
              style={[
                styles.cardContainer,
                { backgroundColor: item.name.toLowerCase() },
              ]}
            >
              <Text style={styles.innerText}>{item.name}</Text>
            </View>
          );
        }}
        horizontal={true}
      />
    </View>
  );
};

export default FlatCard;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
  },
  cardContainer: {
    height: 100,
    width: 100,
    borderWidth: 0,
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 15,
    marginVertical: 15,
    marginHorizontal: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  innerText: {
    fontSize: 22,
    fontWeight: "semibold",
    color: "white",
  },
});
