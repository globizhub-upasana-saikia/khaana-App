import { StyleSheet, View, FlatList, Pressable, Text } from "react-native";
import React from "react";

const Categories = () => {
  const items = [
    { id: "1", name: "Fastest Delivery" },
    { id: "2", name: "Rating 4.1+" },
    { id: "3", name: "Offers" },
    { id: "4", name: "Cuisines" },
    { id: "5", name: "Max Safety" },
    { id: "6", name: "Pro" },
  ];

  return (
    <View style={{ paddingVertical: 10 }}>
      <FlatList
        data={items}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          alignItems: "center",
          paddingHorizontal: 10,
        }}
        renderItem={({ item }) => (
          <Pressable style={styles.chip}>
            <Text style={styles.text}>{item.name}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    backgroundColor: "#ffe4c4",
    borderRadius: 20,
    marginRight: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
  },
});
