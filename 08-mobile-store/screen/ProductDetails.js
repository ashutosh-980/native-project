import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

const ProductDetails = ({ route }) => {
  console.log(route.params.product);
  const prd = route.params.product;
  return (
    <ScrollView style={styles.prdContainer}>
      {/* Image Container */}
      <View style={styles.imgContainer}>
        {/* Product Image */}
        <Image
          source={{ uri: prd.imageUrl }}
          style={styles.imgStyle}
          resizeMode="contain"
        />
      </View>

      {/* Product Details Container */}
      <View style={styles.prdDetails}>
        {/* Product Name */}
        <View>
          <Text style={styles.prdName}>{prd.name}</Text>
        </View>

        {/* Product Rating Conatiner */}
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{prd.rating} ⭐ </Text>
          <Text style={styles.toatlVotes}>(👥 {prd.totalVotes})</Text>
        </View>
      </View>

      {/* Product Price Container */}
      <View style={styles.priceContainer}>
        {/* Discount Percentage */}
        <Text style={styles.percentageOff}>{prd.discountPercentage}% OFF</Text>

        {/* Original Price */}
        <Text style={styles.orgPrice}>₹{prd.originalPrice}</Text>

        {/* Discounted Price */}
        <Text style={styles.disPrice}>₹{prd.discountedPrice}</Text>
      </View>

      {/* Product Description Container*/}
      <View style={styles.prdDescriptionContainer}>
        <Text style={styles.headerText}>Product Specifications </Text>

        {/* Display */}
        <Text style={styles.specificationsText}>
          ▸ Display : {prd.specifications.display}
        </Text>

        {/* Resolution */}
        <Text style={styles.specificationsText}>
          ▸ Resoloution : {prd.specifications.resolution}
        </Text>

        {/* Processor */}
        <Text style={styles.specificationsText}>
          ▸ Processor : {prd.specifications.processor}
        </Text>

        {/* RAM */}
        <Text style={styles.specificationsText}>
          ▸ RAM : {prd.specifications.ram}
        </Text>

        {/* Storage */}
        <Text style={styles.specificationsText}>
          ▸ Storage : {prd.specifications.storage}
        </Text>

        {/* Rear Camera */}
        <Text style={styles.specificationsText}>
          ▸ Rear Camera : {prd.specifications.rearCamera}
        </Text>

        {/* Front Camera */}
        <Text style={styles.specificationsText}>
          ▸ Front Camera : {prd.specifications.frontCamera}
        </Text>

        {/* Battery */}
        <Text style={styles.specificationsText}>
          ▸ Battery : {prd.specifications.battery}
        </Text>

        {/* Charging */}
        <Text style={styles.specificationsText}>
          ▸ Charging : {prd.specifications.charging}
        </Text>

        {/* Operating System */}
        <Text style={styles.specificationsText}>
          ▸ Operating System : {prd.specifications.operatingSystem}
        </Text>

        {/* Network */}
        <Text style={styles.specificationsText}>
          ▸ Network : {prd.specifications.network}
        </Text>
      </View>
    </ScrollView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  prdContainer: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    paddingHorizontal: 10,
  },
  imgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    overflow: "hidden",
  },
  imgStyle: {
    width: 300,
    height: 300,
    marginVertical: 10,
  },
  prdDetails: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  prdName: {
    color: "#1E293B",
    marginLeft: 6,
    fontSize: 16,
    fontWeight: "700",
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
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 2,
    marginHorizontal: 10,
    backgroundColor: "#F1F5F9",
    marginVertical: 8,
    padding: 3,
    borderRadius: 12,
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
    fontSize: 30,
    fontWeight: "bold",
  },
  percentageOff: {
    color: "#EA580C",
    fontSize: 22,
    fontWeight: "bold",
  },
  prdDescriptionContainer: {
    flex: 1,
    paddingVertical: 2,
    paddingHorizontal: 4,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#1E293B",
    textAlign: "left",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    marginBottom: 12,
  },
  specificationsText: {
    fontWeight: "700",
    fontSize: 18,
    marginBottom: 5,
    color: "#64748B",
  },
});
