import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";

const Contact = () => {
  const contactsData = [
    {
      id: "1",
      name: "Aarav Sharma",
      quote: "Stay positive and keep moving forward.",
      profilePicture: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: "2",
      name: "Priya Verma",
      quote: "Believe in yourself and trust the process.",
      profilePicture: "https://i.pravatar.cc/150?img=47",
    },
    {
      id: "3",
      name: "Rohan Mehta",
      quote: "Dream big, work hard, stay humble.",
      profilePicture: "https://i.pravatar.cc/150?img=33",
    },
    {
      id: "4",
      name: "Ananya Singh",
      quote: "Create your own opportunities.",
      profilePicture: "https://i.pravatar.cc/150?img=32",
    },
    {
      id: "5",
      name: "Vikram Patel",
      quote: "Every day is a new chance to grow.",
      profilePicture: "https://i.pravatar.cc/150?img=11",
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contact List</Text>
      <View style={styles.contactContainer}>
        <FlatList
          data={contactsData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <View style={styles.contactItem}>
                <Image
                  source={{ uri: item.profilePicture }}
                  style={styles.imgStyle}
                />
                <View style={styles.aboutContainer}>
                  <Text style={styles.nameText}>{item.name}</Text>
                  <Text style={styles.quoteText}>{item.quote}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
  },
  contactContainer: {
    width: 320,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E5E7EB",
    backgroundColor: "#FFFFFF",
    padding: 8,
    margin: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  contactItem: {
    width: "auto",
    minHeight: 80,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    backgroundColor: "#FFFFFF",
    padding: 10,
    marginBottom: 10,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  imgStyle: {
    height: 60,
    width: 60,
    borderRadius: 30,
    resizeMode: "cover",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "blue",
  },
  aboutContainer: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 12,
    paddingVertical: 4,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#111827",
  },
  quoteText: {
    fontSize: 13,
    fontWeight: "400",
    color: "#6B7280",
    lineHeight: 16,
  },
});
