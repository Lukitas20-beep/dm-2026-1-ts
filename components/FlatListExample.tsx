import { FlatList, StyleSheet, View } from "react-native";
import { useState } from "react";

import { FlatListItem } from "@/components/FlatListItem";

const DATA = [
  { id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba", name: "Devin" },
  { id: "3ac68afc-c605-48d3-a4f8-fbd", name: "Dan" },
  { id: "58694a0f-3da1-471f-bd96-141", name: "Dominic" },
  { id: "58694a0f-3da1-471f-bd96-142", name: "Jackson" },
  { id: "58694a0f-3da1-471f-bd96-143", name: "James" },
  { id: "58694a0f-3da1-471f-bd96-144", name: "Joel" },
  { id: "58694a0f-3da1-471f-bd96-145", name: "John" },
  { id: "58694a0f-3da1-471f-bd96-146", name: "Jillian" },
  { id: "58694a0f-3da1-471f-bd96-147", name: "Jimmy" },
  { id: "58694a0f-3da1-471f-bd96-148", name: "Julie" },
  { id: "58694a0f-3da1-471f-bd96-149", name: "John" },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
});

export const FlatListExample = () => {
  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({ item }: { item: (typeof DATA)[0] }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const textColor = item.id === selectedId ? "white" : "black";

    return (
      <FlatListItem
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={textColor}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </View>
  );
};
