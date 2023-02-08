import { combineReducers } from "redux";
import newsState from "./newsReducer";
import authState from "./authReducer";
import userState from "./userReducer";
import dataKandangState from "./dataKandangReducer";

const reducer = combineReducers({
  newsState,
  authState,
  userState,
  dataKandangState
});

export default reducer;
