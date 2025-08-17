import type { RootState } from '../store';

export function selectIsLoadingJobs(state: RootState) {
  return state.isLoadingJobs;
}
