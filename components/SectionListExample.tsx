import { useState } from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

import { PEOPLE_LIST as DATA } from "@/data/contacts";
import { transformListToSectionList } from "@/utils/list-utils";
import { SectionListItem } from "./SectionListItem";

const TRANSFORMED_DATA = transformListToSectionList([...DATA]);

export function SectionListExample() {
  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({ item }: { item: string }) => {
    const backgroundColor = item === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item === selectedId ? "white" : "black";

    return (
      <SectionListItem
        item={item}
        onPress={() => setSelectedId(item)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <View style={styles.container}>
      <SectionList
        sections={TRANSFORMED_DATA}
        renderItem={renderItem}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item) => `basicListEntry-${item}`}
        extraData={selectedId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "beige",
    textAlign: "center",
  },
});
