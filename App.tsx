import { useEffect, useState } from 'react';
import {StyleSheet, Text, View, TextInput, SafeAreaView, Platform, StatusBar as RNStatusBar, Image,Button, ActivityIndicator, Modal, Pressable} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TaskList from './src/components/TaskList';
import { addTask, deleteTask, getAllTasks, updateTask, TaskItem } from './src/utils/handle-api';
import Checkbox from 'expo-checkbox';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function App() {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [taskId, setTaskId] = useState("");
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [dueDate, setDueDate] = useState(new Date());
  const [completed, setCompleted] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    getAllTasks(setTasks);
    setLoading(false);
  }, []);

  const handleSave = () => {
    if (!text.trim()) return;

    const taskData = {
      text,
      completed,
      dueDate
    };

    if (isUpdating) {
      updateTask(taskId, taskData, setTasks);
      setIsUpdating(false);
      setTaskId("");
    } else {
      addTask(taskData, setTasks);
    }

    setText("");
    setCompleted(false);
    setDueDate(new Date());
    setModalVisible(false);
  };

  const updateMode = (_id: string, text: string) => {
    setIsUpdating(true);
    setText(text);
    setTaskId(_id);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <View style={styles.headerContainer}>
          <Image
            source={require('./assets/task-app-banner.png')}
            style={styles.logo}
          />
          <Text style={styles.header}>Tarefas</Text>
        </View>

        <View style={styles.counterContainer}>
          <Text style={styles.counterText}>
            Total de Tarefas: {tasks.length}
          </Text>
        </View>

        <View style={styles.top}>
          <Pressable
            onPress={() => {
              setModalVisible(true);
              setText("");
              setCompleted(false);
            }}
            style={({ pressed }) => [
              styles.addButton,
              {
                transform: [{ scale: pressed ? 0.96 : 1 }],
                elevation: pressed ? 2 : 5
              }
            ]}
          >
            <Text style={styles.addButtonText}>+ Nova Tarefa</Text>
          </Pressable>
        </View>

        <Modal
          visible={modalVisible}
          transparent
          animationType="fade"
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>

              <Text style={styles.header}>
                {isUpdating ? "Editar" : "Nova Tarefa"}
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Digite a tarefa..."
                value={text}
                onChangeText={setText}
              />

              <View style={styles.row}>
                <Checkbox
                  value={completed}
                  onValueChange={setCompleted}
                />
                <Text>Concluída</Text>
              </View>

              <Pressable onPress={() => setShowDatePicker(true)}>
                <Text>
                  Data: {dueDate.toLocaleDateString('pt-BR')}
                </Text>
              </Pressable>

              {showDatePicker && (
                <DateTimePicker
                  value={dueDate}
                  mode="date"
                  onChange={(event, date) => {
                    setShowDatePicker(false);
                    if (date) setDueDate(date);
                  }}
                />
              )}

              <Pressable
                onPress={handleSave}
                style={({ pressed }) => [
                  styles.btnSalvar,
                  { transform: [{ scale: pressed ? 0.96 : 1 }] }
                ]}
              >
                <Text style={styles.addButtonText}>
                  {isUpdating ? "Atualizar" : "Salvar"}
                </Text>
              </Pressable>

              <Button
                title="Cancelar"
                color="red"
                onPress={() => setModalVisible(false)}
              />

            </View>
          </View>
        </Modal>

        <View style={styles.nativeButtonContainer}>
          <Button
            title="Excluir todas as tarefas"
            color="#d9534f"
            onPress={() => setTasks([])}
          />
        </View>

        <TaskList
          tasks={tasks}
          onUpdate={updateMode}
          onDelete={(id) => deleteTask(id, setTasks)}
        />

        {loading && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#000" />
          </View>
        )}
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0,
  },

  container: {
    flex: 1,
    maxWidth: 600,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 16,
  },

  headerContainer: {
    alignItems: 'center',
    marginTop: 16,
  },

  logo: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },

  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  counterContainer: {
    marginTop: 8,
    alignItems: 'center',
  },

  counterText: {
    fontSize: 16,
    color: '#666',
  },

  top: {
    marginTop: 20,
    alignItems: 'center',
  },

  addButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
  },

  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  nativeButtonContainer: {
    marginTop: 16,
  },

  input: {
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVertical: 10,
  },

  btnSalvar: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },

  loaderContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
