import * as API from "../../api/kandang";

export const login = (authLoginForm, history) => async (dispatch) => {
  dispatch({ type: "SET_LOADING_AUTH", value: true });
  try {
    const result = await API.login(authLoginForm);

    if (result.data.success) {
      history.push("/");
      dispatch({ type: "SET_IS_ERROR", value: null });
    } else {
      dispatch({ type: "SET_IS_ERROR", value: result.data.message });
    }

    dispatch({ type: "SET_AUTH_FROM_CELAR" });
    dispatch({ type: "SET_LOADING_AUTH", value: false });
  } catch (err) {
    dispatch({ type: "SET_AUTH_FROM_CELAR" });
    dispatch({ type: "SET_LOADING_AUTH", value: false });
  }
};

export const register = (authRegisterForm, history) => async (dispatch) => {
  dispatch({ type: "SET_LOADING_AUTH", value: true });
  try {
    const result = await API.register(authRegisterForm);

    if (result.data.success) {
      history.push("/sign-in");
    } else {
        dispatch({ type: "SET_IS_ERROR", value: result.data.message });
    }

    dispatch({ type: "SET_AUTH_FROM_REGISTER_CELAR" });
    dispatch({ type: "SET_LOADING_AUTH", value: false });
  } catch (err) {
    dispatch({ type: "SET_AUTH_FROM_REGISTER_CELAR" });
    dispatch({ type: "SET_LOADING_AUTH", value: false });
  }
};
