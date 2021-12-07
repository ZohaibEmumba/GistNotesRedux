export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";


const initialState = {
    userName: "",
    PAT: "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"
}

const reducer = ( state = initialState , action) => {
    switch(action.types){
        case LOGIN:
            localStorage.setItem("token", JSON.stringify( state.PAT = action.payload));
            return { ...state, 
                token: action.payload , 
                userName : action.payload 
            };
        case LOGOUT:
            localStorage.clear();
            return { ...state, user: null };
        default:
            return state;
    }
}
export default reducer;