import type { RootState } from '../store';

export function selectAllJobs(state: RootState) {
  return state.jobs;
}
