import React, { Component } from "react";
import styled from "styled-components";
// import { NavBar } from "../components/nav";

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 97vh;
  margin-top: 2%;
  align-items: center;
  justify-content: space-between;

  /* border-style: solid;
  border-color: white; */
  .main {
    /* border-style: solid;
    border-color: rgb(99, 156, 199); */
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    .leftSide {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 25%;
      margin-left: 120px;
      margin-top: 10px;
      margin-bottom: 10px;
      /* border-style: solid;
      border-color: rgb(99, 156, 199); */
      div {
        box-shadow: 0 4px 8px 0 rgba(99, 156, 199, 0.5);
        /* border-style: solid;
        border-color: white; */
        height: 30%;
        width: 100%;
      }
    }

    .rightSide {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 25%;
      margin-right: 120px;
      margin-top: 10px;
      margin-bottom: 10px;
      border-left: 3px solid rgb(219, 158, 57);
      box-shadow: 0 4px 8px 0 rgba(219, 158, 57, 0.5);
      /* border-style: solid; */
      /* background-color: rgba(99, 156, 199); */
      /* border-color: rgb(99, 156, 199); */
    }

    .feed {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 35%;
      margin: 10px;
      /* border-style: solid; */
      /* border-color: rgb(99, 156, 199); */
      box-shadow: 0 4px 8px 0 rgba(99, 156, 199, 0.5);
      overflow: scroll;
    }
  }
`;

export default class HomePage extends Component {
  render() {
    return (
      <HomePageWrapper>
        {/* <NavBar /> */}
        <div className="main">
          <div className="leftSide">
            <div> Mini Prof Card</div>
            <div>Leaderboard Card</div>
            <div>Trending news #</div>
          </div>
          <div className="feed"> two </div>
          <div className="rightSide"> three </div>
        </div>
        {/* <div className="footer">footer</div> */}
      </HomePageWrapper>
    );
  }
}

// <p>
//   **I will be responsible for rendering: newsFeed => statsBox =>
//   predictRibbon => navBar => leaderboard => miniChars => miniWatchList**
// </p>
