import { createSlice } from '@reduxjs/toolkit';

const initialState: boolean = true;

const isLoadingJobsSlice = createSlice({
  name: '@isLoadingJobs',
  initialState,
  reducers: {
    setIsLoadingJobsTrue: () => {
      return true;
    },
    setIsLoadingJobsFalse: () => {
      return false;
    },
  },
});

// экспортируем функции action-creators используя деструктуризацию

export const { setIsLoadingJobsFalse, setIsLoadingJobsTrue } =
  isLoadingJobsSlice.actions;

// экспортируем весь reducer для определённого slice, чтобы добавить его в Redux-store
export default isLoadingJobsSlice.reducer;
