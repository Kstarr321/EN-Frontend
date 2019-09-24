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
      height: 100%;

      input {
        height: 20%;
        width: 60%;

        font-size: 28px;
        /* margin: 2%; */
      }
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

  handleChange = e => {
    let key = e.target.name;
    this.setState({
      [key]: e.target.value
    });
    // console.log(`I have changed ${key}`);
  };

  render() {
    return (
      <ModalWrapper>
        <div className="modal" id="modal">
          <div className="analytics"></div>
          <div className="form">
            <form>
              <input
                type="text"
                placeholder="Name your Prediction"
                name="name"
                onChange={e => this.handleChange(e)}
              ></input>
              <br></br>
              <input
                type="date"
                name="date"
                onChange={e => this.handleChange(e)}
              ></input>
              <br></br>
              <input
                type="number"
                name="price"
                onChange={e => this.handleChange(e)}
              ></input>
              <br></br>
              <button
                className="toggle-button"
                onClick={e =>
                  this.props.close(e, this.props.selectedStock, this.state)
                }
              >
                Submit Prediction
              </button>
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
