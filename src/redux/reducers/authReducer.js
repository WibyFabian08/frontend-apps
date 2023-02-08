const initialState = {
  authLoginForm: {
    email: "",
    password: "",
  },
  authRegisterForm: {
    name: "",
    id_produk: "",
    email: "",
    password: "",
  },
  isLoadingAuth: false,
  isError: null,
  message: null,
};

const authState = (state = initialState, action) => {
  switch (action.type) {
    case "SET_AUTH_LOGIN_FORM":
      return {
        ...state,
        authLoginForm: {
          ...state.authLoginForm,
          [action.name]: action.value,
        },
      };

    case "SET_AUTH_REGISTER_FORM":
      return {
        ...state,
        authRegisterForm: {
          ...state.authRegisterForm,
          [action.name]: action.value,
        },
      };

    case "SET_AUTH_FROM_REGISTER_CELAR":
      return {
        ...state,
        authRegisterForm: {
          name: "",
          id: 0,
          email: "",
          password: "",
        },
      };

    case "SET_AUTH_FROM_CELAR":
      return {
        ...state,
        authLoginForm: {
          email: "",
          password: "",
        },
      };

    case "SET_LOADING_AUTH":
      return {
        ...state,
        isLoadingAuth: action.value,
      };

    case "SET_IS_ERROR":
      return {
        ...state,
        isError: action.value,
      };

    case "SET_MESSAGE":
      return {
        ...state,
        message: action.value,
      };

    default:
      return state;
  }
};

export default authState;
