import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

const reducer = {};

const middleware = [...getDefaultMiddleware(), logger];

export type ApplicationState = {};
const preloadedState: ApplicationState = {};

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
});

export { store };
