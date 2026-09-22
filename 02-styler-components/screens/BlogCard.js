import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const BlogCard = () => {
  const blogData = [
    {
      id: "1",
      name: "Aarav Sharma",
      title: "The Future of Web Development",
      description:
        "Explore how modern web technologies are changing the way developers build fast and interactive applications.",
      category: "Web Development",
      date: "22 Sep 2026",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    },
    {
      id: "2",
      name: "Priya Verma",
      title: "Getting Started with React Native",
      description:
        "Learn the basics of React Native and discover how to build mobile applications using JavaScript and React.",
      category: "React Native",
      date: "18 Sep 2026",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800",
    },
    {
      id: "3",
      name: "Rohan Mehta",
      title: "A Beginner's Guide to JavaScript",
      description:
        "Understand the essential JavaScript concepts every beginner should learn before building real-world projects.",
      category: "JavaScript",
      date: "15 Sep 2026",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800",
    },
    {
      id: "4",
      name: "Ananya Singh",
      title: "Building Better User Interfaces",
      description:
        "Discover simple design principles that can help you create clean, accessible, and user-friendly interfaces.",
      category: "UI/UX Design",
      date: "10 Sep 2026",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800",
    },
    {
      id: "5",
      name: "Vikram Patel",
      title: "Why Developers Should Learn Git",
      description:
        "Understand why Git is an essential tool for developers and how version control makes collaboration easier.",
      category: "Development Tools",
      date: "5 Sep 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800",
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Blog Card</Text>
      <FlatList
        data={blogData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.blogContainer}>
              <Image
                source={{
                  uri: item.image,
                }}
                style={styles.imgStyle}
              />
              <Text style={styles.category}>{item.category}</Text>
              <Text style={styles.blogTitle}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <View style={styles.aboutContainer}>
                <Text style={styles.nameText}>By {item.name}</Text>
                <Text style={styles.dateText}>Date:- {item.date}</Text>
              </View>
            </View>
          );
        }}
        horizontal={true}
      />
    </View>
  );
};

export default BlogCard;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
  },
  blogContainer: {
    width: 300,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#E5E7EB",
    marginHorizontal: 20,
    marginVertical: 10,
    overflow: "hidden",
    backgroundColor: "#F9FAFB",
  },
  imgStyle: {
    height: 190,
    width: "100%",
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  category: {
    maxWidth: 180,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "blue",
    color: "white",
    borderWidth: 0,
    borderStyle: "solid",
    borderColor: "blue",
    borderRadius: 15,
    padding: 2,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  blogTitle: {
    textAlign: "left",
    fontSize: 22,
    fontWeight: "bold",
    fontFamily: "sans-serif-condensed",
    margin: 5,
  },
  description: {
    textAlign: "left",
    fontSize: 14,
    fontWeight: "semibold",
    fontFamily: "sans-serif-condensed",
    margin: 5,
  },
  aboutContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  nameText: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "sans-serif-condensed",
  },
  dateText: {
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "sans-serif-condensed",
  },
});
