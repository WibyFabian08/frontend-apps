import * as API from "../../api/kandang";

export const getDataKandang = (id) => async (dispatch) => {
  try {
    const result = await API.getDataKandang(id);

    dispatch({ type: "SET_DATA_KANDANG", value: result.data.data[0] });
  } catch (err) {}
};
