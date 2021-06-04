import {Action, combineReducers} from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from '..';
import news from "../reducers/news";
import users from "../store/users/reducer";

const rootReducer =  combineReducers({
  news,
  users,
});

export type InferActionsTypes<T> = T extends {
  [key: string]: (...args: any[]) => infer U;
}
  ? U
  : never;

  export type BaseThunkType<
  A extends Action,
  R = Promise<void> | void
> = ThunkAction<R, AppStateType, unknown, A>;

export default rootReducer