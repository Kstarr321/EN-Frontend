import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border-style: solid;
  border-color: white;
  height: 24%;
  width: 90%;
  margin: 1.3%;
  padding: 1px;
  /* margin-top: 0.3%; */
`;

export default class StockCard extends Component {
  render() {
    debugger;
    return <Wrapper>I am a stock Card!</Wrapper>;
  }
}
