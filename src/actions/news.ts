import {
  NEWS_SET_ITEMS

} from './actionTypes';

export const setNewsItems = (news: any) => ({
  type: NEWS_SET_ITEMS,
  payload: news,
});