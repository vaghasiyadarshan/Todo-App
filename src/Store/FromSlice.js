// myReducer.js
import { createSlice } from '@reduxjs/toolkit';

const Fromreducer = createSlice({
  name: 'fromdata',
  initialState: [],
  reducers: {
    pushData: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { pushData } = Fromreducer.actions;
export default Fromreducer.reducer;
