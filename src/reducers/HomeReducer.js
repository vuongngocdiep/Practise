import * as types from "../constants/ActionTypes";

const initialState = {
  items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  index: 12,
  data: [],
};

export default function HomeReducer(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_INDEX:
      return {
        ...state,
        index: state.index + action.payload.index,
      };
    case types.CHANGE_DATA:
      return {
        ...state,
        data: action.payload.data,
      };
    case types.CHANGE_ITEMS:
      return {
        ...state,
        items: action.payload.items,
      };
    case types.SEARCH:
      return {
        ...state,
        items: [action.payload.items],
      };
    case types.SORT:
      return {
        ...state,
        items: action.payload.items,
        index: 12,
      };
    default:
      return state;
  }
}
