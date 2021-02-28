import * as types from "../constants/ActionTypes";

export const change_items = (items) => ({
  type: types.CHANGE_ITEMS,
  payload: {
    items: items,
  },
});
export const change_index = (index) => ({
  type: types.CHANGE_INDEX,
  payload: {
    index: index,
  },
});
export const change_data = (data) => ({
  type: types.CHANGE_DATA,
  payload: {
    data: data,
  },
});
export const search = (item) => ({
  type: types.SEARCH,
  payload: {
    items: item,
  },
});
export const sort = (items) => ({
  type: types.SORT,
  payload: {
    items: items,
  },
});
