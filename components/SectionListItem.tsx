import { StyleSheet, Text, TouchableOpacity } from "react-native";

type ItemProps = {
    item: string;
    onPress: () => void;
    backgroundColor: string;
    textColor: string;
};

export function SectionListItem({ item, onPress, backgroundColor, textColor }: ItemProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.item, { backgroundColor }]}
        >
            <Text style={[styles.title, { color: textColor }]}>{item}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});