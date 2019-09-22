import React, { Component } from "react";
import Chart from "../components/chart";
import Quotr from "../components/quotr";
import styled from "styled-components";

const ChartPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

export default class ChartPage extends Component {
  render() {
    return (
      <ChartPageWrapper>
        <Quotr />
        <Chart />
      </ChartPageWrapper>
    );
  }
}
