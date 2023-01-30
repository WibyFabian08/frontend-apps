const initialState = {
  isLoadingFetchNews: false,
  news: [],
};

const newsState = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NEWS":
      return {
        ...state,
        news: action.value,
      };

    case "SET_IS_LOADING_FETCH_NEWS":
      return {
        ...state,
        isLoadingFetchNews: action.value,
      };
    default:
      return state;
  }
};

export default newsState
