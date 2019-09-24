const organize = (data, dispatch) => {
  let destructuredData = Object.entries(data["Time Series (5min)"]);
  const labels = destructuredData.map(pair => {
    return pair[0];
  });
  const points = destructuredData.map(pair => {
    return parseFloat(pair[1]["4. close"]);
  });
  console.log(points.length);
  let chartData = {
    labels: labels.reverse(),
    datasets: [
      {
        label: `${data["Meta Data"]["2. Symbol"].toUpperCase()}`,
        // backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: points.reverse()
      }
    ]
  };

  dispatch({ type: "GET_STOCK", chartData });
};

const organizeIndicatorData = (data, dispatch) => {
  let destructuredData = Object.entries(data["Technical Analysis: SMA"]);
  const points = destructuredData
    .map(pair => {
      return parseFloat(pair[1]["SMA"]);
    })
    .slice(0, 100);

  // debugger
  dispatch({ type: "SET_INDICATOR", points });
};

const organizeNewsData = (data, dispatch) => {
  const orgData = [];

  data["data"].forEach(art => {
    orgData.push(art);
  });

  dispatch({ type: "SET_NEWS", orgData });
};

export const getStock = symbol => {
  console.log("I am in the Action about to fetch");
  return dispatch => {
    fetch("http://localhost:3000/quote/intraday", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        ticker: symbol
      })
    })
      .then(r => r.json())
      .then(data => {
        organize(data, dispatch);
      });
  };
};

export const getSectors = () => {
  return dispatch => {
    // dispatch() this is where i can addd another dispatch if i want to do something else AND do the fetch too
    fetch("http://localhost:3000/quote/sectors", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
      .then(response => response.json())
      .then(data => dispatch({ type: "GET_SECTORS", data }));
  };
};

export const logUserIn = obj => {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: { username: obj.username, password: obj.password }
      })
    })
      .then(r => r.json())
      .then(data => {
        dispatch({ type: "LOGIN", data });
      });
  };
};

export const updateUser = () => {
  return dispatch => {
    if (localStorage.getItem("token")) {
      fetch("http://localhost:3000/api/v1/profile", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      })
        .then(r => r.json())
        .then(data => {
          dispatch({ type: "UPDATE_USER", data });
        });
    } else {
      return { error: "not found" };
    }
  };
};

export const getIndicator = (indicator, symbol) => {
  console.log("I am about to fetch for the technical indicator!!!!!!!!!!!!!");
  // debugger;
  return dispatch => {
    fetch("http://localhost:3000/quote/indicator", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({ indicator, symbol })
    })
      .then(r => r.json())
      .then(data => {
        organizeIndicatorData(data, dispatch);
      });
  };
};

export const getNews = () => {
  // debugger;
  return dispatch => {
    fetch("http://localhost:3000/news/general", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
      .then(response => response.json())
      .then(data => organizeNewsData(data, dispatch));
  };
};

export const persistPrediction = (stock, info) => {
  let newStock = { ticker: stock.datasets[0].label };
  return dispatch => {
    fetch("http://localhost:3000/predictions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({ newStock, info })
    });
  };
};
