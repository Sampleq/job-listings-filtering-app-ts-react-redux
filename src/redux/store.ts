import { configureStore } from '@reduxjs/toolkit';

import filtersReducer from './slices/filtersSlice';
import jobsReducer from './slices/jobsSlice';
import isLoadingJobsReducer from './slices/isLoadingJobsSlice';
import errorReducer from './slices/errorSlice';

export const store = configureStore({
  reducer: {
    isLoadingJobs: isLoadingJobsReducer,
    error: errorReducer,
    filters: filtersReducer,
    jobs: jobsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
