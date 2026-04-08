import axios from "axios";

const BASE_URL = "http://192.168.1.2:5000/tasks"; 

export interface TaskItem {
  _id: string;
  text: string;
  completed: boolean;
  dueDate?: Date;
}

export const getAllTasks = async (setTasks: Function) => {
  try {
    const res = await axios.get(`${BASE_URL}/`);
    setTasks(res.data);
  } catch (err) {
    console.log("Erro ao buscar:", err);
  }
};

export const addTask = async (task: any, setTasks: Function) => {
  try {
    const res = await axios.post(`${BASE_URL}/save`, task);
    setTasks((prev: TaskItem[]) => [...prev, res.data]);
  } catch (err) {
    console.log("Erro ao adicionar:", err);
  }
};

export const updateTask = async (
  id: string,
  task: any,
  setTasks: Function
) => {
  try {
    const res = await axios.post(`${BASE_URL}/update`, {
      _id: id,
      ...task
    });

    setTasks((prev: TaskItem[]) =>
      prev.map((item) =>
        item._id === id ? res.data : item
      )
    );
  } catch (err) {
    console.log("Erro ao atualizar:", err);
  }
};

export const deleteTask = async (
  id: string,
  setTasks: Function
) => {
  try {
    await axios.post(`${BASE_URL}/delete`, { _id: id });

    setTasks((prev: TaskItem[]) =>
      prev.filter((item) => item._id !== id)
    );
  } catch (err) {
    console.log("Erro ao deletar:", err);
  }
};
