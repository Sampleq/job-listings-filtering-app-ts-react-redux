import type { JobData } from '@/types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState: JobData[] = [];

const jobsSlice = createSlice({
  name: '@jobs',
  initialState,
  reducers: {
    loadAllJobs: (_, action: PayloadAction<JobData[]>) => {
      return action.payload;
    },
  },
});

// экспортируем функции action-creators используя деструктуризацию
export const { loadAllJobs } = jobsSlice.actions;

// экспортируем весь reducer для определённого slice, чтобы добавить его в Redux-store
export default jobsSlice.reducer;
