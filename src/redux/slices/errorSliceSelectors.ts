import type { RootState } from '../store';

export function selectError(state: RootState) {
  return state.error;
}
