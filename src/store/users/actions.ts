import { USERS_LOADING, USERS_SET_USERS} from "./action-types";
import { UserType } from "./reducer";
import {userApi} from '../../api/users'
import { BaseThunkType, InferActionsTypes } from "..";



const actions = {
  setUsers : (users: Array<UserType>) => ({
    type: USERS_SET_USERS,
    payload: users,
  } as const),
  setLoading: (bool: boolean) => ({
    type: USERS_LOADING,
    payload: bool
  } as const)
}

export const usersActions = actions;
export type UsersActions = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<UsersActions>

export const fetchUsers = (): ThunkType => async (dispatch) => {
  // dispatch({
  //   type: NEWS_LOADING,
  //   payload: true,
  // });

  try {
    const response = await userApi.getOrders();

    const {data} = response.data;

    dispatch(actions.setUsers(data));


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