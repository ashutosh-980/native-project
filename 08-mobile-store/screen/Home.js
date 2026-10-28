import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { smartphones } from "../data/smartphones";

const Home = ({ navigation }) => {
  const [phones, setPhones] = useState(smartphones);

  return (
    <View style={styles.container}>
      <FlatList
        data={phones}
        keyExtractor={(phone) => phone.id.toString()}
        renderItem={({ item: phone }) => {
          return (
            <>
              <Pressable
                onPress={() =>
                  navigation.navigate("Product Details", { product: phone })
                }
              >
                <View style={styles.productContainer}>
                  {/* Product Image */}
                  <Image
                    source={{
                      uri: phone.imageUrl,
                    }}
                    style={styles.imgStyle}
                  />

                  <View style={styles.prdInfoContainer}>
                    {/* Rating Conatiner*/}
                    <View style={styles.ratingContainer}>
                      <Text style={styles.rating}>{phone.rating} ⭐ </Text>
                      <Text style={styles.toatlVotes}>
                        (👥 {phone.totalVotes})
                      </Text>
                    </View>

                    {/* Brand Name */}
                    <Text style={styles.brandName}>{phone.brand}</Text>

                    {/* Product Name */}
                    <Text style={styles.prdName}>{phone.name}</Text>

                    <View style={styles.priceContainer}>
                      {/* Original Price */}
                      <Text style={styles.orgPrice}>
                        ₹{phone.originalPrice}
                      </Text>

                      {/* Discounted Price */}
                      <Text style={styles.disPrice}>
                        ₹{phone.discountedPrice}
                      </Text>
                    </View>

                    {/* Precentage Off */}
                    <Text style={styles.percentageOff}>
                      {phone.discountPercentage}% OFF
                    </Text>
                  </View>
                </View>
                {/* Underline View */}
                <View style={styles.underline} />
              </Pressable>
            </>
          );
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 1.5,
  },
  productContainer: {
    marginTop: 2,
    borderRadius: 6,
    padding: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  prdInfoContainer: {
    gap: 6,
  },
  imgStyle: {
    height: 200,
    width: 150,
    borderRadius: 10,
  },
  ratingContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#00ff00",
    backgroundColor: "green",
    borderRadius: 16,
    color: "white",
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 6,
  },
  toatlVotes: {
    color: "gray",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 10,
    marginRight: 6,
  },
  brandName: {
    alignSelf: "flex-start",
    marginLeft: 6,
    backgroundColor: "#DBEAFE",
    color: "#1D4ED8",
    textAlign: "center",
    fontSize: 13,
    fontWeight: "bold",
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 16,
  },
  prdName: {
    color: "#1E293B",
    marginLeft: 6,
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 22,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginHorizontal: 6,
  },
  orgPrice: {
    textDecorationLine: "line-through",
    textDecorationColor: "red",
    textDecorationStyle: "solid",
    fontSize: 20,
    fontWeight: "bold",
    color: "#6B7280",
  },
  disPrice: {
    color: "#15803D",
    fontSize: 28,
    fontWeight: "bold",
  },
  percentageOff: {
    backgroundColor: "#EA580C",
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    alignSelf: "center",
  },
  underline: {
    height: 1,
    width: "100%",
    backgroundColor: "#E5E7EB",
    marginTop: 8,
  },
});
