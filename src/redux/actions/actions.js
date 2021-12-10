
export const login = (name) => {
  console.log(name)
  return {
    type: "LOGIN",
    payload : name
  }
}
  export const logout = () => ({
    type: "LOGOUT",
  });