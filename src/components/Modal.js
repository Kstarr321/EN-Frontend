import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
// import { PrimaryButton } from "../styled-components/Buttons";

const ModalWrapper = styled.div`
  display: flex;
  height: 100vh;

  align-items: center;
  justify-content: center;
  align-content: center;

  .modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-left: 4px solid green;
    height: 50%;
    width: 50%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 1);
  }

  .modal div {
    margin: 10px;
  }
`;

export class Modal extends React.Component {
  render() {
    return (
      <ModalWrapper>
        <div className="modal" id="modal">
          <div className="content"></div>
          <div className="actions">
            <button className="toggle-button">Submit</button>
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
