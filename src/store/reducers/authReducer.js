const initialState = {
  user: [],
  isLogin: [],
  token: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        ...initialstate,
      };
  }
};
