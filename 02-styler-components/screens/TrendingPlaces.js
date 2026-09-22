import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const TrendingPlaces = () => {
  const touristPlaces = [
    {
      id: "1",
      place: "Taj Mahal",
      city: "Agra",
      state: "Uttar Pradesh",
      distance: "12 km",
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800",
    },
    {
      id: "2",
      place: "Hawa Mahal",
      city: "Jaipur",
      state: "Rajasthan",
      distance: "8 km",
      image:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
    },
    {
      id: "3",
      place: "Gateway of India",
      city: "Mumbai",
      state: "Maharashtra",
      distance: "15 km",
      image:
        "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800",
    },
    {
      id: "4",
      place: "Varanasi Ghats",
      city: "Varanasi",
      state: "Uttar Pradesh",
      distance: "5 km",
      image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=800",
    },
    {
      id: "5",
      place: "Golden Temple",
      city: "Amritsar",
      state: "Punjab",
      distance: "4 km",
      image:
        "https://images.unsplash.com/photo-1623059508779-2542c6e83753?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Trending Tourist Places Across India</Text>
      <FlatList
        data={touristPlaces}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <ImageBackground
              source={{ uri: item.image }}
              style={{
                height: 300,
                width: 350,
                justifyContent: "space-between",
              }}
              imageStyle={{ borderRadius: 25 }}
            >
              <Text style={styles.placeName}>{item.place}</Text>

              <View style={styles.bottomContainer}>
                <View>
                  <Text style={styles.innerText}>{item.city},</Text>
                  <Text style={styles.innerText}>{item.state}</Text>
                </View>

                <Text style={styles.distance}>{item.distance}</Text>
              </View>
            </ImageBackground>
          );
        }}
        horizontal={true}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      />
    </View>
  );
};

export default TrendingPlaces;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 15,
  },
  placeName: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginBottom: 15,
  },
  innerText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  distance: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});
