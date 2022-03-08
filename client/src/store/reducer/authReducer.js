const authReducer = (state, action) => {
  console.log(action, "action");

  switch (action.type) {
    case "SIGNUP_SUCCESS":
      // localStorage.setItem('payload',  JSON.stringify(action.state[0]));
      console.log({
        state: state,
        action: action,
      });
      return state;
    case "SIGNIN_SUCCESS":
      // localStorage.setItem('payload',  JSON.stringify(action.state[0]));
      console.log({
        state: state,
        action: action,
      });
      return;
    case "SIGNUP_FAIL":
      // localStorage.setItem('payload',  JSON.stringify(action.state[0]));
      console.log("FAIL");
      return [...state, action.state];
    default:
      return state;
  }
};

export default authReducer;
