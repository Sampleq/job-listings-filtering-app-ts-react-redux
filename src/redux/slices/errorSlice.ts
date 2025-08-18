import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState: string = '';

const errorSlice = createSlice({
  name: '@error',
  initialState,
  reducers: {
    addError: (_, action: PayloadAction<string>) => {
      return action.payload;
    },
    deleteError: () => initialState,
  },
});

// экспортируем функции action-creators используя деструктуризацию
export const { addError, deleteError } = errorSlice.actions;

// экспортируем весь reducer для определённого slice, чтобы добавить его в Redux-store
export default errorSlice.reducer;
