import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../actions/userAction";

const initialState = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      console.log("fulfilled");
      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      console.log("rejected");
      state.users = [1, 2, 3];
    });
  },
});
export default usersSlice.reducer;
