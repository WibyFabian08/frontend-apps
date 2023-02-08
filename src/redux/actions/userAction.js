import * as API from "../../api/kandang";

export const getUserById = (id) => async (dispatch) => {
  try {
    const result = await API.getUserById(id);

    dispatch({ type: "SET_USER", value: result.data.data[0] });
  } catch (err) {}
};
