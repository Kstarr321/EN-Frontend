import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
// import { PrimaryButton } from "../styled-components/Buttons";

const ModalWrapper = styled.div`
  display: flex;
  height: 100vh;
  /* border-style: solid;
  border-color: white; */

  align-items: center;
  justify-content: center;
  align-content: center;

  .analytics,
  .form {
    border-style: solid;
    border-color: white;
    align-self: center;
    margin: 2%;
    width: 50%;
    height: 100%;
  }

  .form {
    display: flex;
    flex-direction: column;

    form {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }

  .modal {
    display: flex;
    align-items: center;
    align-content: center;
    border-left: 4px solid green;
    height: 50%;
    width: 50%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 1);
  }
`;

export class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      date: "",
      price: ""
    };
  }

  render() {
    return (
      <ModalWrapper>
        <div className="modal" id="modal">
          <div className="analytics"></div>
          <div className="form">
            <form>
              <input type="text" placeholder="Name your Prediction"></input>
              <br></br>
              <input type="date"></input>
              <br></br>
              <input type="number"></input>
              <br></br>
              <button className="toggle-button">Submit Prediction</button>
            </form>
          </div>
        </div>
      </ModalWrapper>
    );
  }
}

const mapStateToProps = state => {
  return { selectedStock: state.selectedStock };
};

export default connect(
  mapStateToProps,
  null
)(Modal);
