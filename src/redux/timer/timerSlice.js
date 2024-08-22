import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 timer: 0
};

const timerSlice = createSlice({
  // Ім'я слайсу
  name: "timer",
  // Початковий стан редюсера слайсу
  initialState: initialState,
  // Об'єкт редюсерів
  reducers: {
   incrementTimer(state) {state.timer += 1 },
  },
});

// Генератори екшенів
export const { incrementTimer} = timerSlice.actions;

// Редюсер слайсу
export const timerReducer = timerSlice.reducer;

