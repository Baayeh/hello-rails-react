import { configureStore } from '@reduxjs/toolkit';
import messageSlice from './messages/messageSlice';

const store = configureStore({
  reducer: {
    message: messageSlice,
  },
});

export default store;
