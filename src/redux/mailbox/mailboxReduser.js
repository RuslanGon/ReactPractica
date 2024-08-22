import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  // Ім'я слайсу
  name: "tasks",
  // Початковий стан редюсера слайсу
  initialState: [],
  // Об'єкт редюсерів
  reducers: {
    addTask(state, action) {},
    deleteTask(state, action) {},
    toggleCompleted(state, action) {},
  },
});

// Генератори екшенів
const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;

// Редюсер слайсу
const tasksReducer = tasksSlice.reducer;








// const initialState = {
//   users: [],
//   filter: "",
// };

// export const mailboxReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "mailbox/ADD_USER": {
//       return {
//         ...state,
//         users: [...state.users, action.payload]
//       };
//     }

//     case "mailbox/DELETE_USER": {
//         return {
//           ...state,
//           users: state.users.filter(user => user.id !== action.payload)
//         };
//       }

//       case "mailbox/SET_FILTER": {
//         return {
//           ...state,
//           filter: action.payload
//         };
//       }

//     default:
//       return state;
//   }
// };


