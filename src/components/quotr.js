import React, { Component } from "react";
import styled from "styled-components";
import { getStock } from "../redux/actions";
import { getIndicator } from "../redux/actions";
import { persistPrediction } from "../redux/actions";
import { connect } from "react-redux";
import Modal from "./Modal";
import PredictForm from "../styled_components/PredictForm";

const QuotrWrapper = styled.div`
  /* border-style: solid;
  border-color: white; */
  margin-top: 1%;
  width: 50%;
  align-self: center;
  display: flex;
  height: 50px;
  justify-content: space-around;

  .stock {
    font-family: inherit;
    text-align: left;
    font-size: 1rem;
    padding: 0.4rem;
  }

  .other {
    font-family: inherit;
    border: none;
    text-align: center;
    font-size: 1rem;
    padding: 0.5rem;
    background: rgb(99, 156, 199);
    height: 70%;
    color: white;
    cursor: pointer;
    &:hover {
      background: rgb(255, 99, 132);
      color: white;
    }
  }

  .add {
    font-family: inherit;
    border: none;
    text-align: center;
    background: rgb(99, 156, 199);
    color: white;
    font-size: 1rem;
    padding: 0.5rem;
    cursor: pointer;

    &:hover {
      background: rgb(255, 99, 132);
      color: white;
    }
  }
`;

export class Quotr extends Component {
  constructor() {
    super();
    this.state = {
      symbol: "",
      indicator: ""
    };
  }

  // togglePredictor = () => {
  //   this.setState({
  //     showPredictor: true
  //   });
  // };

  // closePredictor = (e, stock, info) => {
  //   e.preventDefault();

  //   this.props.persistPrediction(stock, info);
  //   this.setState({
  //     showPredictor: false
  //   });
  // };

  handleChange = e => {
    this.setState({
      symbol: e.target.value
    });
  };

  handleIndicator = e => {
    this.setState({
      indicator: e.target.value
    });
  };

  handleIndicatorSubmit = e => {
    e.preventDefault();
    this.props.getIndicator(this.state.indicator, this.state.symbol);
  };

  handleSubmit = e => {
    // debugger;
    e.preventDefault();
    this.props.getStock(this.state.symbol);
  };

  render() {
    // if (this.state.showPredictor === false)
    return (
      <QuotrWrapper>
        <div className="main">
          <form>
            <input
              className="stock"
              onChange={e => this.handleChange(e)}
              type="text"
              placeholder="Stock Symbol...."
              value={this.state.symbol}
            ></input>
            <button className="add" onClick={e => this.handleSubmit(e)}>
              Add Stock
            </button>
          </form>
        </div>
        <div>
          <form>
            <input
              type="text"
              className="stock"
              placeholder="Technical Indicator"
              onChange={this.handleIndicator}
            ></input>
            <button
              className="add"
              onClick={e => this.handleIndicatorSubmit(e)}
            >
              Add Indicator
            </button>
          </form>
        </div>
        <button className="other" onClick={this.props.toggle}>
          Make Prediction
        </button>
        <button className="other">Save Chart</button>
      </QuotrWrapper>
    );

    // else {
    //   return (
    //     <FormWrapper>
    //       <PredictForm className="form" close={this.closePredictor} />;
    //     </FormWrapper>
    //   );

    // }
  }
}

const mapStateToProps = state => {
  return { selectedStock: state.selectedStock };
};

export default connect(
  mapStateToProps,
  { getStock, getIndicator, persistPrediction }
)(Quotr);
