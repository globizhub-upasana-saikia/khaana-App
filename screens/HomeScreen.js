import {View, SafeAreaView, TextInput } from "react-native";
import React from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{margin:10}}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#ffe4c4",
          padding: 7,
        }}
      >
        <EvilIcons name="search" size={24} color="#cd853f" />

        <TextInput
          placeholder="Restaurant name, cuisines, or a dish"
          style={{
            flex: 1,          
            marginLeft: 6,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
