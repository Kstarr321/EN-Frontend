import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";

let data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45]
    },
    { label: "chart 2", data: [20, 1, 3], borderColor: "rgb(255, 99, 132)" }
  ]
};

export class Chart extends Component {
  componentDidMount() {}

  render() {
    // console.log(this.props.selectedStock);
    return (
      <div>
        <Line
          data={this.props.selectedStock}
          height={140}
          options={{
            responsive: true,
            maintainAspectRatio: true
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { selectedStock: state.selectedStock };
};

// this.props.selectedStock
export default connect(
  mapStateToProps,
  null
)(Chart);
