// store.js
import { configureStore } from '@reduxjs/toolkit';
import Fromreducer from './FromSlice';

const store = configureStore({
  reducer: {
    Fromreducer: Fromreducer
  }
});

export default store;
