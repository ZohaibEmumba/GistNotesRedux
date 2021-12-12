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
