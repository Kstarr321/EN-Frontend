import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getNews } from "../redux/actions";

const CardWrapper = styled.div`
  /* border-style: solid;
  border-color: white; */

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  margin: 2.5%;
  width: 90%;
  height: 100px;
  flex: 1;
  border-left: 4px solid white;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;

  .banner {
    display: flex;
    font-size: 23px;
    flex-direction: column;
    align-content: center;
    align-items: center;
    border-bottom: 5px solid white;
    width: 100%;
    height: 12%;
    background-color: rgb(99, 156, 199);
    /* align-items: center;
    align-self: center; */
  }

  .body {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    color: white;
    /* border-left: 5px solid white; */

    .image {
      /* align-self: flex-start; */
      /* border-bottom: 5px solid white; */
      /* border-style: solid;
      border-color: white; */
      height: 100%;
      width: 100%;
      font-size: 20px;

      img {
        width: 100%;
        height: 50%;
      }
    }

    .story {
      /* border-style: solid;
      border-color: white; */
      height: 100%;
      width: 100%;
    }
  }
`;

export default class NewsCard extends Component {
  render() {
    return (
      <CardWrapper>
        <div className="banner">{this.props.details.title}</div>
        <div className="body">
          <div className="image">
            <img src={this.props.details.image_url}></img>
            <p>{this.props.details.text}</p>
          </div>
          <div className="story">oasdkjfoknf</div>
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
