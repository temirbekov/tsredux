import {
  USERS_LOADING, USERS_SET_USERS,
} from './action-types';
import { UsersActions } from './actions';

export type UserType = {
  id: number,
  name: string,
  email: string
}

const initialState = {
  list: null as Array<UserType> | null,
  loading: false,
};

export type initialStateType = typeof initialState;

const usersReducer = (state: initialStateType = initialState, action: UsersActions) : initialStateType => {
  switch (action.type) {
    case USERS_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case USERS_SET_USERS: {
      return {
        ...state,
        list: action.payload,
      };
    }
    default:
      return state;
  }
}

export default usersReducer