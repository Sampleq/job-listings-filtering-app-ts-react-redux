import { configureStore } from '@reduxjs/toolkit';

import filtersReducer from './slices/filtersSlice';
import jobsReducer from './slices/jobsSlice';
import isLoadingJobsReducer from './slices/isLoadingJobsSlice';

export const store = configureStore({
  reducer: {
    isLoadingJobs: isLoadingJobsReducer,
    filters: filtersReducer,
    jobs: jobsReducer,
    // error: errorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
