import React, { Component } from "react";
import styled from "styled-components";

const SectorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1px;
  margin-left: 10px;
  padding: 3px;
  color: white;
  font-size: 28px;

  .perf {
    /* color: rgb(118, 175, 160); */
    margin-right: 2px;
    color: rgb(1, 150, 179);
  }
`;

export default class SectorDisplay extends Component {
  render() {
    return (
      <SectorWrapper>
        <div>{this.props.sector[0]}</div>
        <div className="perf">{this.props.sector[1]}</div>
      </SectorWrapper>
    );
  }
}
