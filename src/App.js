import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { updateUser } from "./redux/actions";
import { connect } from "react-redux";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { NavBar } from "./components/nav";
import "./fonts/Raleway/Raleway-Regular.ttf";
import "./fonts/Notable/Notable-Regular.ttf";
import LandingPage from "./static/LandingPage";
import LoginPage from "./containers/LoginPage";
import SignupPage from "./containers/SignupPage";
import HomePage from "./containers/HomePage";
import ChartPage from "./containers/ChartPage";
import PredictorPage from "./containers/PredictorPage";
import ProfilePage from "./containers/ProfilePage";
import WatchListPage from "./containers/WatchListPage";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Notable', sans-serif;
  src: local('Notable'), url(./fonts/Notable/Notable-Regular.ttf) format('truetype');
}


* {
    /* font-family: Raleway; */
    font-family: 'Notable', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

body {
  /* font-family: Raleway; */
  /* background-color: rgb(52, 50, 51); */
  /* background-color: white; */
  background-color: rgb(1, 150, 179);


  font-size: 15px;
  
  }`;

export class App extends React.Component {
  componentDidMount() {
    this.props.updateUser();
  }

  render() {
    if (this.props.state.currentUser !== null) {
      // debugger;
      return (
        <>
          <NavBar />
          <GlobalStyle />

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
