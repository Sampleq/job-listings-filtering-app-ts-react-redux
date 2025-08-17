import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux';
import type { AppDispatch, RootState } from './store';

export const useAppDispatch: () => AppDispatch = useDispatch;

// понадобится если не будем использовать внешние типизированные функции-коллбеки selector-ы
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
