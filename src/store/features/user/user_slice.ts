import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  username: string | null;
  email: string | null;
  password: string | null;
}

const initialState: UserState = {
  username: null,
  email: null,
  password: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    removeUser: (state) => {
      state.username = null;
      state.email = null;
      state.password = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
