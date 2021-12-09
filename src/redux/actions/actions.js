
export const login = (name) => {
  return {
    type: "LOGIN",
    payload : name
  }
}
  export const logout = () => ({
    type: "LOGOUT",
  });