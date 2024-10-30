import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import messageReducer from "../features/messageSlice";

export const store = configureStore({
  reducer: {
    // messageスライスのreducerを設定
    message: messageReducer,
  },
});

// ディスパッチ関数の型
export type AppDispatch = typeof store.dispatch;
// ストアの状態全体の型
export type RootState = ReturnType<typeof store.getState>;
// 非同期アクションの型
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
