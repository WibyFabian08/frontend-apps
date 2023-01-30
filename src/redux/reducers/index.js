import { combineReducers } from "redux";
import newsState from "./newsReducer";

const reducer = combineReducers({
  newsState,
});

export default reducer;
