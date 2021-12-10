const initialState = {
  userName: "",
  PAT: "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",
  isloggedin: false,
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log("zohaib I am here ");
      return {
        ...state,
        userName: action.payload,
        isloggedin: true,
      };
  }
};

export default LoginReducer;
