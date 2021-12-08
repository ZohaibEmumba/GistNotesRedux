export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";


export const login = () => {
  console.log("action")
  return {
    type: LOGIN
  }
}
  
  export const logout = () => ({
    type: LOGOUT,
  });