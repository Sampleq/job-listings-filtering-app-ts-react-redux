import type { FilterValue } from '@/types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState: FilterValue[] = [];
// const initialState: FilterValue[] = ['React', 'Python']; // for development

const filtersSlice = createSlice({
  name: '@filters',
  initialState,
  reducers: {
    addFilter: (state, action: PayloadAction<FilterValue>) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload); // immer
      }

      return state;
    },

    removeFilter: (state, action: PayloadAction<FilterValue>) => {
      return state.filter((value) => value !== action.payload);
    },

    removeAllFilters: () => {
      return initialState;
    },
  },
});

// экспортируем функции action-creators используя деструктуризацию
export const { addFilter, removeFilter, removeAllFilters } =
  filtersSlice.actions;

// экспортируем весь reducer для определённого slice, чтобы добавить его в Redux-store
export default filtersSlice.reducer;
