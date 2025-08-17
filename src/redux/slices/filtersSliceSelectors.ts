import type { RootState } from '../store';

export function selectFilters(state: RootState) {
  return state.filters;
}
