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
