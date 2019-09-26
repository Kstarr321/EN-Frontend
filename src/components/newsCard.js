import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getNews } from "../redux/actions";

const CardWrapper = styled.div`
  /* border-style: solid;
  border-color: white; */
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  margin: 2.5%;
  width: 90%;
  height: 100px;
  flex: 1;
  /* border-left: 4px solid white; */
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  border-radius: 25px;

  .banner {
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    /* top-border-radius: 25px; */
    /* border-radius: 25px; */
    padding: 6%;
    display: flex;
    font-size: 30px;
    color: white;
    /* margin: 1%; */
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
    /* border-bottom: 5px solid white; */
    width: 100%;
    height: 12%;
    /* background-color: white; */
    background-color: rgb(0, 115, 175);

    /* background-color: rgb(219, 158, 57); */
    /* align-items: center;
    align-self: center; */
  }

  .body {
    /* border-radius: 25px; */
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
    margin-top: 0%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    color: black;
    overflow-y: scroll;
    /* overflow */
    /* margin-bottom: 2%; */
    /* border-left: 5px solid white; */

    .image {
      /* align-self: flex-start; */
      /* border-bottom: 5px solid white; */
      /* border-style: solid;
      border-color: white; */
      /* overflow: hidden; */
      height: 100%;
      width: 100%;
      font-size: 20px;
      /* margin-top: 0%; */
      p {
        padding: 2%;
        font-size: 33px;
        font-style: italic;
      }

      .this {
        /* object-fit: cover; */
        /* position: absolute; */
        /* object-fit: none; */
        /* top: 0; */
        /* left: 0; */
        width: 50%;
        /* width: 100%; */
        height: 50%;
        /* padding: 10%; */
      }
    }

    /* .story {
      /* border-style: solid;
      border-color: white; */
    /* border-radius: 25px;

      height: 100%;
      width: 100%; */
    /* }  */
  }
`;

export default class NewsCard extends Component {
  render() {
    return (
      <CardWrapper>
        <div className="banner">{this.props.details.title}</div>
        <div className="body">
          <div className="image">
            <img src={this.props.details.image_url} className="this"></img>
            <p>{this.props.details.text}</p>
          </div>
          {/* <div className="story">oasdkjfoknf</div> */}
        </div>
      </CardWrapper>
    );
  }
}

// const mapStateToProps = state => {
//   return { news: state.news };
// };

// export default connect(
//   null,
//   { getNews }
// )(NewsCard);
