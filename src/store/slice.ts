import { createSlice } from '@reduxjs/toolkit';
import { TodoItemType } from '~/store/models/models';
interface InitialStateType {
  deletedTodos: TodoItemType[];
  todos: TodoItemType[];
}

const initialState: InitialStateType = {
  deletedTodos: [],
  todos: []
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo: TodoItemType = {
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description,
        deadline: action.payload.deadline,
        status: 'pending'
      }
      state.todos.push(newTodo);
      console.log(state.todos)
    },
    toggleComplete: (state, action) => {
      const index = state.todos.findIndex((todo: TodoItemType) => todo.id === action.payload.id);
      state.todos[index].status = action.payload.status;
    },
    deleteTodo: (state, action) => {
      const todosData = [...state.todos];
      const deletedTodos = [...state.deletedTodos];
      deletedTodos.push(todosData.find((todo: TodoItemType) => todo.id === action.payload.id));
      return {
        ...state, 
        todos: todosData.filter((todo: TodoItemType) => todo.id !== action.payload.id),
        deletedTodos: deletedTodos
      }
    },
    editTodo: (state, action) => {
      const index = state.todos.findIndex((todo: TodoItemType) => todo.id === action.payload.id);
      state.todos[index].title = action.payload.title;
      state.todos[index].description = action.payload.description;
      state.todos[index].deadline = action.payload.deadline;
    }
  },
});

export const {
  addTodo,
  toggleComplete,
  deleteTodo,
  editTodo
} = todoSlice.actions;

export default todoSlice.reducer;
