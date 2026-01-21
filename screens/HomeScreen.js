import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  Text,
  Image,
  Pressable,
  ScrollView,
  Dimensions,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import Categories from "../components/Categories";
import HeroImage1 from "../assets/pomotionbanner/heroimage1.png";
import HeroImage2 from "../assets/pomotionbanner/heroimage2.jpeg";

const { width } = Dimensions.get("window");

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* 1. Search Bar */}
        <View style={styles.searchSection}>
          <View style={styles.searchWrapper}>
            <EvilIcons name="search" size={24} color="#E52B50" />
            <TextInput
              placeholder="Restaurant name, cuisines, or a dish"
              placeholderTextColor="#999"
              style={styles.input}
            />
          </View>
        </View>

        <Categories />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width * 0.85 + 16}
          decelerationRate="fast"
          contentContainerStyle={styles.bannerContainer}
        >
          <Image source={HeroImage1} style={styles.promoImage} />
          <Image source={HeroImage2} style={styles.promoImage} />
        </ScrollView>
        <Text style={styles.sectionTitle}>Crave it. Get it.</Text>

        <View style={styles.quickPicksGrid}>
          {QUICK_PICKS.map((item) => (
            <Pressable key={item.id} style={styles.pickItem}>
              <View style={styles.imageCircle}>
                <Image source={{ uri: item.uri }} style={styles.pickImage} />
              </View>
              <Text style={styles.pickText}>{item.name}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const QUICK_PICKS = [
  {
    id: "1",
    name: "Thalis",
    uri: "https://imgs.search.brave.com/KhbY1ATwBSz8x0U_ddNh6xIDBR_193Q4GNJt14UVOi8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MGIvNTMvMWUvNjIv/YXNzYW1lc2UtdGhh/bGkuanBn",
  },
  {
    id: "2",
    name: "Pizzas",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2fIIZ5yHqkqXHgg9TuQuJ_mFZbINJLt1ODQ&usqp=CAU",
  },
  {
    id: "3",
    name: "Burgers",
    uri: "https://imgs.search.brave.com/DmtkUIbjI4cYsll5RVRtAG9_N7C3mTo4YUy9mF3CqTg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzYyLzc3LzI5/LzM2MF9GXzU2Mjc3/Mjk0Ml9HdzY3cW1W/bzBUUUNNVjh4cjNI/TGNyY1VLZ25lWVdN/Ti5qcGc",
  },
  {
    id: "4",
    name: "Dosas",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJsC7uWf7rd0qrXk2zCpasTV8W-HCcr9JeKQ&usqp=CAU",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  searchSection: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "500",
  },
  bannerContainer: {
    paddingLeft: 16,
    paddingRight: 8,
    marginVertical: 10,
  },
  promoImage: {
    width: width * 0.85,
    height: 160,
    borderRadius: 18,
    marginRight: 12,
    resizeMode: "cover",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    paddingHorizontal: 16,
    marginTop: 20,
    marginBottom: 15,
    color: "#1c1c1c",
  },
  quickPicksGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  pickItem: {
    alignItems: "center",
    width: (width - 60) / 4,
    marginBottom: 20,
  },
  imageCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#F8F8F8",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  pickImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  pickText: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: "600",
    color: "#444",
  },
});

export default HomeScreen;
