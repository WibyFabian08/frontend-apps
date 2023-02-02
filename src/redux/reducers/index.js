import { combineReducers } from "redux";
import newsState from "./newsReducer";
import authState from "./authReducer";

const reducer = combineReducers({
  newsState,
  authState
});

export default reducer;
