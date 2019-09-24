import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border-style: solid;
  border-color: white;
  height: 25%;
  width: 90%;
  /* margin-top: 0.3%; */
`;

export default class StockCard extends Component {
  render() {
    return <Wrapper>I am the stock card</Wrapper>;
  }
}
