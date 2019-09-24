import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const FormWrapper = styled.div`
  position: relative;
  margin-right: 25%;
  /* margin-left: 50%; */
  /* align-self: center;
  align-items: center;
  align-content: center; */
  body {
    background: #faf3ec;
    font-family: "Roboto";
  }

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: #748194;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: #748194;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: #748194;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: #748194;
  }
  .container {
    display: none;
    position: absolute;
    width: auto;
    height: auto;
    top: calc(50% - 240px);
    left: calc(40% - 160px);
    border-radius: 15px 15px 15px 15px;
  }
  .c1 {
    box-shadow: 0 0 10px grey;
    background-color: white;
    width: 300px;
    height: 500px;
    display: inline-block;
    border-radius: 15px 15px 15px 15px;
  }

  .c11 {
    background-image: url("https://i.pinimg.com/736x/b8/09/22/b80922f6ea2daaf36a6627378662803b--deck-of-cards-phone-wallpapers.jpg");
    background-size: 300px 400px;
    background-repeat: no-repeat;
    background-color: white;
    width: 300px;
    height: 400px;
    display: inline-block;
    position: absolute;
    z-index: 4;
    border-radius: 15px 15px 200px 200px;
  }
  #left,
  #right {
    color: white;
    display: inline-block;
    width: 146px;
    height: 500px;
    background-color: white;
    cursor: pointer;
  }
  #left {
    border-radius: 15px 0px 0px 15px;
  }
  #right {
    border-radius: 15px 15px 15px 0px;
  }
  .left_hover {
    color: #ee9ba3;
    box-shadow: 5px 0 18px -10px #333;
    z-index: 1;
    position: absolute;
  }
  .right_hover {
    box-shadow: -5px 0 15px -10px #333;
    z-index: 1;
    position: absolute;
  }
  .s1class {
    color: #748194;
    position: absolute;
    bottom: 0;
    left: 63%;
    margin-left: -50%;
  }
  .s1class span,
  .s2class span {
    display: block;
  }
  .su {
    font-size: 20px;
  }
  .s2class {
    color: #748194;
    position: absolute;
    bottom: 0;
    right: 63%;
    margin-right: -50%;
  }
  .mainhead {
    color: white;
    font-size: 24px;
    text-align: center;
    margin-top: 50px;
  }
  .mainp {
    color: white;
    font-size: 13px;
    text-align: center;
    margin-top: 10px;
  }
  .c2 {
    background-color: white;
    width: 300px;
    height: 500px;
    border-radius: 15px;
    position: absolute;
    left: 370px;
    display: inline-block;
  }
  .username {
    font-weight: bold;
    width: 200px;
    margin: 0 35px 20px;
    height: 35px;
    padding: 6px 15px;
    border-radius: 5px;
    outline: none;
    border: none;
    background: #f6f7f9;
    color: #748194;
    font-size: 14px;
  }
  .btn {
    font-weight: bold;
    width: 230px;
    margin: 0 35px 20px;
    height: 45px;
    padding: 6px 15px;
    border-radius: 5px;
    outline: none;
    border: none;
    background: #ee9ba3;
    color: white;
    font-size: 14px;
  }
  .signup1 {
    color: #748194;
    font-size: 30px;
    text-align: center;
  }
  a {
    text-decoration: none;
  }
  .signup2 {
    color: #748194;
    font-size: 20px;
    text-align: center;
  }
  .signup {
    display: initial;
  }
  .signin {
    display: initial;
  }
`;

export class PredictForm extends Component {
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
      //   <div className="container">
      <FormWrapper>
        <div className="c1">
          <div className="c11">
            <h1 className="mainhead">$ AAPL</h1>
            <p className="mainp">
              Just click the buttons below to toggle between SignIn & SignUp
            </p>
          </div>
          <div id="left">
            <h1 className="s1className">
              <span>SIGN</span>
              <span className="su">IN</span>
            </h1>
          </div>
          <div id="right">
            <h1 className="s2className">
              <span></span>
              <span className="su">UP</span>
            </h1>
          </div>
        </div>
        <div className="c2">
          <form className="signup">
            <h1 className="signup1">Make Prediction</h1>

            <input
              name="name"
              onChange={e => this.handleChange(e)}
              type="text"
              placeholder="Name this prediction*"
              className="username"
            />

            <input
              name="date"
              onChange={e => this.handleChange(e)}
              type="date"
              placeholder="Date*"
              className="username"
            />

            <input
              name="price"
              onChange={e => this.handleChange(e)}
              type="number"
              step="0.01"
              placeholder="Price $$"
              className="username"
            />

            <button
              className="btn"
              onClick={e =>
                this.props.close(e, this.props.selectedStock, this.state)
              }
            >
              Submit Prediction
            </button>
          </form>
          {/* <form className="signin">
            <h1 className="signup1">SIGN IN</h1>

            <input
              name="username"
              type="text"
              placeholder="Username*"
              className="username"
            /> */}

          {/* <input
              name="password"
              type="password"
              placeholder="Password*"
              className="username"
            /> */}

          {/* <button className="btn">Get Started</button> */}

          {/* <br></br>
            <br></br>
            <br></br>
            <br></br> */}
          {/* <a href="">
              <p className="signup2">Forget Password?</p>
            </a> */}
          {/* </form> */}
        </div>
      </FormWrapper>
    );
  }
}

const mapStateToProps = state => {
  return { selectedStock: state.selectedStock };
};

export default connect(
  mapStateToProps,
  null
)(PredictForm);
