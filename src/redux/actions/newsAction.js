import * as API from "../../api/news";

export const getNews = (name) => async (dispatch) => {
  dispatch({ type: "SET_IS_LOADING_FETCH_NEWS", value: true });
  try {
    const result = await API.getNews(name);

    dispatch({ type: "SET_NEWS", value: result.data.data.posts.slice(0, 6) });
    
    dispatch({ type: "SET_IS_LOADING_FETCH_NEWS", value: false });
} catch (err) {
      dispatch({ type: "SET_NEWS", value: [] });
    dispatch({ type: "SET_IS_LOADING_FETCH_NEWS", value: false });
  }
};
