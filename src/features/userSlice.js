import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: { // 초기값 설정해주기
    user: null,
  },
  reducers: { // 내가 하고 싶은 동작을 작성하면되
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }

  },
});

export const { login, logout } = userSlice.actions; // 클래스 밖에서 두 작업 실행할 수 있도록 export 


export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
