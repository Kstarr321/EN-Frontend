export default function stateManager(
  state = {
    selectedStock: {}, // CURRENTLY IN USE
    indicator: {}, // CURRENTLY IN USE
    currentUser: null, // ???
    allUsers: [], // This is a fetch i'm going to make to fill up the leaderboard section
    news: [], // CURRENTLY IN USE
    presetStocks: [], // Not sure what to do with this yet. I just want my user to be able to see a layout of sto cks they could choose from.
    watchlists: [], // I'm not sure I'm actually going to need this since I can just get this from my user.
    sectors: [] // CURRENTLY IN USE
  },
  action
) {
  switch (action.type) {
    case "GET_STOCK":
      return { ...state, selectedStock: action.chartData };
    case "GET_SECTORS":
      // debugger;
      return {
        ...state,
        sectors: action.data["Rank F: Year-to-Date (YTD) Performance"]
      };
    case "SET_INDICATOR":
      let stock = { ...state.selectedStock };
      let newAtt = {
        label: "Indicator",
        data: action.points,
        borderColor: "rgb(99, 156, 199)"
      };
      stock.datasets[1] = newAtt;
      return { ...state, selectedStock: stock };
    case "SET_NEWS":
      return { ...state, news: action.orgData };
    case "SET_FEATURED_STOCKS":
      return { ...state, presetStocks: action.stocks };
    case "LOGIN":
      localStorage.setItem("token", action.data.jwt);
      return { ...state, currentUser: action.data.user };
    case "UPDATE_USER":
      return { ...state, currentUser: action.data.user };
    default:
      return state;
  }
}
