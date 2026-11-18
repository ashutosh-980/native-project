import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { getMovies } from "../api/GetApi";

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  // console.log(getMovies());

  const getMoviesData = async () => {
    try {
      const res = await getMovies();
      console.log(res.data);
      setMovies(res.data.results);
    } catch (err) {
      console.log(`Error is :- ${err}`);
    }
  };

  // Call the API Response in getMoviesData() function in useEffect()
  useEffect(() => {
    getMoviesData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>PopularMovies</Text>

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <View style={styles.posterContainer}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                }}
                style={styles.posterStyle}
                resizeMode="cover"
              />
              <Text style={styles.movieTitle}>{item.title}</Text>
            </View>
          );
        }}
        contentContainerStyle={styles.posterPadding}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
};

export default PopularMovies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
  headerText: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "red",
    marginVertical: 15,
  },
  posterContainer: {
    flex: 1,
    alignItems: "center",
    marginBottom: 15,
  },
  posterStyle: {
    width: "100%",
    aspectRatio: 2 / 3,
    borderRadius: 12,
  },
  movieTitle: {
    color: "white",
    marginTop: 8,
    textAlign: "center",
  },
  posterPadding: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});
