import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgb(88, 75, 79);
  width: 100%;
  height: 5%;
  border-bottom: 3px solid rgb(118, 175, 160);
  font-size: 25px;

  /* div {
    border-style: solid;
    border-color: white;
  } */
  .logo {
    color: white;
    text-decoration: none;
  }

  .links {
    a {
      color: white;
      text-decoration: none;
    }
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-around;
  }
`;

export class NavBar extends React.Component {
  render() {
    return (
      <NavWrapper>
        <div className="logo">Log/Other Section</div>
        <div className="links">
          <Link to="/predictor">Prediction Tool</Link>
          <Link to="/chart">Chartr </Link>
          <Link to="/profile">Profile</Link>
          <Link to="/watchlist">My Watchlist</Link>
          <Link to="/charts">My Charts</Link>
        </div>
      </NavWrapper>
    );
  }
}
