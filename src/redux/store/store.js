import {configureStore} from '@reduxjs/toolkit';
import ApiReducer from '../reducers/ApiReducer';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    apireducer: ApiReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
