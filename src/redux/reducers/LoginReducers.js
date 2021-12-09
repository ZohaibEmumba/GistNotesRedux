const initialState = {
  userName: "",
  PAT: "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",
  isloggedin: false,
};

const LoginReducer = (state = initialState, action) => {
  // console.log(action.payload)
  switch (action.type) {
    case "LOGIN":
      return {
         ...state , 
        userName :  action.payload
      };
  }
  return state;
};

export default LoginReducer;
