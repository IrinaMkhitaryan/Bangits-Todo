import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import todoSlice from './slice';

export const store = configureStore({
  reducer: { todos: todoSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
