export default {
  userLoggedIn: ({ commit }) => {
    commit("loginUser");
  },
  userLoggedOut: ({ commit }) => {
    commit("logoutUser");
  },
  windowWidthUpdate: ({ commit }, payload) => {
    commit("updateWindowWidth", payload);
  },
};
