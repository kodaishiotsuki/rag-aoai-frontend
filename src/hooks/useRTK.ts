import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";

// storeに値を格納する
export const useAppDispatch = () => useDispatch<AppDispatch>();
// storeから値を取得する
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
