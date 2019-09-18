import React from "react";
import { updateUser } from "./redux/actions";
import { connect } from "react-redux";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import LandingPage from "./static/LandingPage";
import LoginPage from "./containers/LoginPage";
import SignupPage from "./containers/SignupPage";
import HomePage from "./containers/HomePage";
import ChartPage from "./containers/ChartPage";
import PredictorPage from "./containers/PredictorPage";
import ProfilePage from "./containers/ProfilePage";
import WatchListPage from "./containers/WatchListPage";

export class App extends React.Component {
  componentDidMount() {
    this.props.updateUser();
  }

  render() {
    if (this.props.state.currentUser !== null) {
      // debugger;
      return (
        <>
          <Switch>
            <Route exact path="/watchlist" component={WatchListPage} />
          </Switch>
          <Switch>
            <Route exact path="/profile" component={ProfilePage} />
          </Switch>
          <Switch>
            <Route exact path="/predictor" component={PredictorPage} />
          </Switch>
          <Switch>
            <Route exact path="/chart" component={ChartPage} />
          </Switch>
          <Switch>
            <Route exact path="/home" component={HomePage} />
          </Switch>
        </>
      );
    } else {
      // debugger;
      return (
        <>
          {" "}
          <Switch>
            <Route exact path="/login" component={LoginPage} />
          </Switch>
          <Switch>
            <Route exact path="/signup" component={SignupPage} />
          </Switch>
          <Switch>
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </>
      );
    }

    // );
  }
}

const mapPropsToState = state => {
  return { state };
};

export default connect(
  mapPropsToState,
  { updateUser }
)(App);
