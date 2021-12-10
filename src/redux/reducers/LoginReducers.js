const initialState = {
  userName: "",
  PAT: "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",
  isloggedin: false,
  searchVal: ""
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        userName: action.payload,
        isloggedin: true,
      };
    case "SEARCH": {
      // console.log(action)
      return {
        ...state,
        searchVal : action.payload
      }
    }
     default :
      return state 
  }
};

export default Reducer;
