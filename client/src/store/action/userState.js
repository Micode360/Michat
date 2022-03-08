export const loadUser = () => {
  let userStr = localStorage.getItem("payload");

  if (!userStr) return;
  else {
    let userObj = JSON.parse(userStr);
    return userObj;
  }
};
