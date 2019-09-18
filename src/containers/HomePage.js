import React, { Component } from "react";
import styled from "styled-components";
import { NavBar } from "../components/nav";

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 97vh;
  align-items: center;
  justify-content: space-between;

  /* border-style: solid;
  border-color: white; */

  .main,
  .footer {
    border-style: solid;
    border-color: white;
    width: 95%;
  }
`;

export default class HomePage extends Component {
  render() {
    return (
      <HomePageWrapper>
        <NavBar />
        <div className="main">
          <div></div>
          {/* <NewsFeed /> */}
          <div></div>
        </div>
        <div className="footer">footer</div>
      </HomePageWrapper>
    );
  }
}

// <p>
//   **I will be responsible for rendering: newsFeed => statsBox =>
//   predictRibbon => navBar => leaderboard => miniChars => miniWatchList**
// </p>
