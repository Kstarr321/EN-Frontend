export default function stateManager(
  state = {
    selectedStock: {},
    indicator: {},
    currentUser: null, // This is filled when my user logs in. I need to make sure that ALL related data comes along with user.
    allUsers: [], // This is a fetch i'm going to make to fill up the leaderboard section
    news: [], // This is a fetch that is going to be made preferrable from a news API. I'd like to group it in 10's if I can. Otherwise the news feed component might get crazy full
    presetStocks: [], // Not sure what to do with this yet. I just want my user to be able to see a layout of sto cks they could choose from.
    watchlists: [], // I'm not sure I'm actually going to need this since I can just get this from my user.
    sectors: [] // This I can fetch independently to show my user perhaps on their dashboard.
  },
  action
) {
  switch (action.type) {
    case "GET_STOCK":
      // debugger;
      return { ...state, selectedStock: action.chartData };

    case "GET_SECTORS":
      return {
        ...state,
        sectors: action.data["Rank F: Year-to-Date (YTD) Performance"]
      };
    case "SET_INDICATOR":
      let newStock = (state.selectedStock.datasets[1] = {
        label: "Indicator",
        data: action.points,
        borderColor: "rgb(99, 156, 199)"
      });

    case "SET_NEWS":
      return { ...state, news: action.data };
      // console.log(newStock);

      return {
        ...state,
        selectedStock: { ...state.selectedStock, newStock }
      };

    case "LOGIN":
      localStorage.setItem("token", action.data.jwt);
      return { ...state, currentUser: action.data.user };

    case "UPDATE_USER":
      return { ...state, currentUser: action.data.user };

    default:
      return state;
  }
}
