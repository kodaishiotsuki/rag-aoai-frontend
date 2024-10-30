import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { MessageType } from "../types/types";

type initialStateType = {
  onyourdata: MessageType[];
};

const initialState: initialStateType = {
  onyourdata: [],
};

// messageスライスを作成
export const messageSlice = createSlice({
  name: "message", // スライスの名前
  initialState,
  reducers: {
    // Reduxストアにメッセージを追加するアクション
    inputMessageToReduxStore: (state, action) => {
      if (action.payload.pathname === "/") {
        state.onyourdata.push(action.payload);
      }
    },
  },
});

// アクションをエクスポート
export const { inputMessageToReduxStore } = messageSlice.actions;

// セレクタ関数: ストアからmessageスライスの状態を取得する
export const selectMessage = (state: RootState) => state.message;

// reducerをエクスポート
export default messageSlice.reducer;
