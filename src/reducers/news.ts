import {
  NEWS_LOADING, NEWS_SET_ITEMS, NEWS_ERROR, NEWS_ADD_ITEMS, NEWS_IS_END, NEWS_PAGE_NUM,
} from '../actions/actionTypes';

const initialState = {
  news: ['becka', 'koka'] as Array<any> | null,
  pageNum: null as number | null,
};

type NewsAction = {
  type: typeof NEWS_SET_ITEMS | typeof NEWS_LOADING
  payload: any
}

export type initialStateType = typeof initialState;

export default function(state: initialStateType = initialState, action: NewsAction) : initialStateType {
  switch (action.type) {
    case NEWS_LOADING: {
      return {
        ...state,
        news: action.payload,
      };
    }
    // case NEWS_ERROR: {
    //   return {
    //     ...state,
    //     fail: true,
    //     error: action.payload,
    //   };
    // }
    // case NEWS_IS_END: {
    //   return {
    //     ...state,
    //     isEnd: action.payload,
    //   };
    // }
    // case NEWS_PAGE_NUM: {
    //   return {
    //     ...state,
    //     pageNum: action.payload,
    //   };
    // }
    case NEWS_SET_ITEMS: {
      return {
        ...state,
        news: action.payload,


      };
    }
    // case NEWS_ADD_ITEMS: {
    //   return {
    //     ...state,
    //     items: [...state.items.concat(action.payload)],
    //   };
    // }
    default:
      return state;
  }
}