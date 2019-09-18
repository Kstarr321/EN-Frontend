export default function stateManager(
  state = {
    selectedStock: {},
    currentUser: null,
    allUsers: [],
    news: [],
    presetStocks: [],
    watchlists: [],
    sectors: []
  },
  action
) {
  switch (action.type) {
    case "GET_STOCK":
      return { test: "case" };

    case "GET_SECTORS":
      return { sectors: action.data["Rank F: Year-to-Date (YTD) Performance"] };

    case "LOGIN":
      localStorage.setItem("token", action.data.jwt);
      return { currentUser: action.data.user };

    case "UPDATE_USER":
      return { currentUser: action.data.user };

    default:
      return state;
  }
}
