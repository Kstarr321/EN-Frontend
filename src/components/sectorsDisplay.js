import React, { Component } from "react";
import styled from "styled-components";

const SectorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  color: white;
  font-size: 20px;

  .perf {
    color: rgb(118, 175, 160);
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
