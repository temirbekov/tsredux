import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {AppDispatch, AppStateType} from "../index";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector