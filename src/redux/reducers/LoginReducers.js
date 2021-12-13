const initialState = {
  userName: "",
  PAT: "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",
  isloggedin: false,
  searchVal: "",
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        userName: action.payload,
        isloggedin: true,
      };
    case "SEARCH": {
      return {
        ...state,
        searchVal: action.payload,
      };
    }
    case "LOGOUT":{
      return {
        ...state,
        userName: "",
        isloggedin: false
      }
    }
    default:
      return state;
  }
};

export default LoginReducer;
