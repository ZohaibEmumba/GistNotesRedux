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
