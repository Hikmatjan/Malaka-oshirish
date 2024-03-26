import { useDispatch, useSelector } from "react-redux";
import type { RootStore, AppDispatch } from "../../redux";
import type { TypedUseSelectorHook } from "react-redux";

export const useReduxDispatch = () => useDispatch<AppDispatch>();
export const useReduxSelector: TypedUseSelectorHook<RootStore> = useSelector;
