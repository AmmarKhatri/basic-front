import { createSlice } from '@reduxjs/toolkit';

export const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    value: "",
  },
  reducers: {
    setToken: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Export actions
export const { setToken, getToken} = tokenSlice.actions;

// Export reducer
export default tokenSlice.reducer;
