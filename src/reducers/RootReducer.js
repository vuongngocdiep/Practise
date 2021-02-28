import HomeReducer from "./HomeReducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
  HomeReducer,
});
export default RootReducer;
