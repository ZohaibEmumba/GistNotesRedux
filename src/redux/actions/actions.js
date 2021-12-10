
export const login = (name) => {
  return {
    type: "LOGIN",
    payload : name
  }
}
export const searchVal = (val) => {
  return {
    type: "SEARCH",
    payload : val
  }
}
export const logout = () => ({
    type: "LOGOUT",
  });