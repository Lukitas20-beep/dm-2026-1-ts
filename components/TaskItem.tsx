import { View, Text, Pressable, StyleSheet } from 'react-native';
import { TaskItem as TaskType } from '../utils/handle-api';

interface TaskProps {
  item: TaskType;
  onUpdate: (id: string, text: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskItem({ item, onUpdate, onDelete }: TaskProps) {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.text,
          item.completed && styles.completed
        ]}
      >
        {item.text}
      </Text>

      {item.dueDate && (
        <Text style={styles.date}>
          {new Date(item.dueDate).toLocaleDateString('pt-BR')}
        </Text>
      )}

      <View style={styles.buttons}>
        <Pressable onPress={() => onUpdate(item._id, item.text)}>
          <Text>Editar</Text>
        </Pressable>

        <Pressable onPress={() => onDelete(item._id)}>
          <Text>Excluir</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
  },

  text: {
    fontSize: 16,
  },

  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },

  date: {
    fontSize: 12,
    color: '#888',
  },

  buttons: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 5,
  }
});
