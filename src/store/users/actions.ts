import {USERS_LOADING, USERS_SET_USERS} from "./action-types";
import { UserType } from "./reducer";
import {userApi} from '../../api/users'
import { ThunkAction } from "redux-thunk";
import {AppStateType} from "../../index";

export type UserActionType = {
  type: typeof USERS_SET_USERS | typeof USERS_LOADING
  payload: any
}

export const setUsers = (users: Array<UserType>): UserActionType => ({
  type: USERS_SET_USERS,
  payload: users,
});

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, UserActionType>

export const fetchUsers = (): ThunkType => async (dispatch) => {
  // dispatch({
  //   type: NEWS_LOADING,
  //   payload: true,
  // });

  try {
    const response = await userApi.getOrders();

    const {data} = response.data;

    dispatch({
      type: USERS_SET_USERS,
      payload: data,
    });


  } catch (err) {
    // dispatch({
    //   type: NEWS_ERROR,
    //   payload: err,
    // });

  } finally {
    // dispatch({
    //   type: NEWS_LOADING,
    //   payload: false,
    // });
  }
};