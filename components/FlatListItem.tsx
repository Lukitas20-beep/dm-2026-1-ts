import { StyleSheet, Text, TouchableOpacity } from "react-native";

type FlatListItemProps = {
  item: {
    id: string;
    name: string;
  };
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

export function FlatListItem({
  item,
  onPress,
  backgroundColor,
  textColor,
}: FlatListItemProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.itemContainer, { backgroundColor }]}
    >
      <Text style={[styles.item, { color: textColor }]}>{item.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 30,
    marginVertical: 20,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
