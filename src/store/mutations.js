export default {
  loginUser: (state) => {
    state.loginStatus = true;
  },
  logoutUser: (state) => {
    state.loginStatus = false;
  },
  updateWindowWidth: (state, { width }) => {
    state.windowWidth = width;
  },
};
