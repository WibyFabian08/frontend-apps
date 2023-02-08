const initialState = {
  dataKandang: null,
};

const dataKandangState = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA_KANDANG":
      return {
        ...state,
        dataKandang: action.value,
      };

    default:
      return state;
  }
};

export default dataKandangState;
