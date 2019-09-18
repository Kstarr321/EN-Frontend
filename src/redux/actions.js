// export const getStock = ticker => {
//   debugger;
//   return { type: "GET_STOCK", ticker };
// };

export const getSectors = ticker => {
  return dispatch => {
    // dispatch() this is where i can addd another dispatch if i want to do something else AND do the fetch too
    fetch("http://localhost:3000/quote/sectors")
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
