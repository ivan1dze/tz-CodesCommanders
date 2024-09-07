// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';

// Конфигурация store
const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

// Тип состояния корневого редьюсера
export type RootState = ReturnType<typeof store.getState>;

// Тип dispatch, основанный на конфигурации store
export type AppDispatch = typeof store.dispatch;

export default store;
