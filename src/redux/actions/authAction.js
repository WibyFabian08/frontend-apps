import * as API from "../../api/kandang";

export const login = (authLoginForm, history) => async (dispatch) => {
  dispatch({ type: "SET_LOADING_AUTH", value: true });
  try {
    const result = await API.login(authLoginForm);

    if (result.data.success) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: result.data.data.id,
        })
      );
      dispatch({ type: "SET_IS_ERROR", value: null });
      history.push("/app");
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
      dispatch({ type: "SET_IS_ERROR", value: null });
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

export const logout = (history) => async (dispatch) => {
  try {
    history.push("/sign-in");
    localStorage.clear();
  } catch (err) {}
};

export const sendEmail = (data) => async (dispatch) => {
  dispatch({ type: "SET_LOADING_AUTH", value: true });
  try {
    const result = await API.sendEmail(data);

    if (result.data.success) {
      dispatch({ type: "SET_IS_ERROR", value: null });
      dispatch({
        type: "SET_MESSAGE",
        value:
          "Send email success, check your email inbox or your email span to get link reset password",
      });
    } else {
      dispatch({ type: "SET_IS_ERROR", value: result.data.message });
    }

    dispatch({ type: "SET_LOADING_AUTH", value: false });
  } catch (err) {
    dispatch({ type: "SET_LOADING_AUTH", value: false });
  }
};

export const resetPassword = (data, email) => async (dispatch) => {
  dispatch({ type: "SET_LOADING_AUTH", value: true });
  try {
    const result = await API.resetPassword(data, email);

    if (result.data.success) {
      dispatch({ type: "SET_IS_ERROR", value: null });
      dispatch({
        type: "SET_MESSAGE",
        value: "Reset password success, please login with your new password",
      });
    } else {
      dispatch({ type: "SET_IS_ERROR", value: result.data.message });
    }

    dispatch({ type: "SET_LOADING_AUTH", value: false });
  } catch (err) {
    dispatch({ type: "SET_LOADING_AUTH", value: false });
  }
};
