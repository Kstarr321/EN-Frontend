import React, { Component } from "react";
import Chart from "../components/chart";
import Quotr from "../components/quotr";
import styled from "styled-components";
import PredictForm from "../styled_components/PredictForm";
import { persistPrediction } from "../redux/actions";
import { connect } from "react-redux";
// import Modal from "./Modal";

const FormWrapper = styled.div`
  position: fixed;
  margin-right: 25%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  align-self: center;
  height: 100vh;
  /* width: 100vh; */
`;

const ChartPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

export class ChartPage extends Component {
  constructor() {
    super();
    this.state = {
      showPredictor: false
    };
  }

  togglePredictor = () => {
    this.setState({
      showPredictor: true
    });
  };

  closePredictor = (e, stock, info) => {
    e.preventDefault();

    this.props.persistPrediction(stock, info);
    this.setState({
      showPredictor: false
    });
  };

  render() {
    if (this.state.showPredictor === false) {
      return (
        <ChartPageWrapper>
          <Quotr toggle={this.togglePredictor} />
          <Chart />
        </ChartPageWrapper>
      );
    } else {
      return (
        <ChartPageWrapper>
          <Chart />
          <FormWrapper>
            <PredictForm close={this.closePredictor} />
          </FormWrapper>
        </ChartPageWrapper>
      );
    }
  }
}

const mapStateToProps = state => {
  return { selectedStock: state.selectedStock };
};

export default connect(
  mapStateToProps,
  { persistPrediction }
)(ChartPage);
