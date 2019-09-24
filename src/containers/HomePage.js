import React from "react";
import styled from "styled-components";
// import SectorDisplay from "../components/sectorsDisplay";
import { connect } from "react-redux";
import { getSectors } from "../redux/actions";
import { getNews } from "../redux/actions";
import { getFeaturedStocks } from "../redux/actions";
import SectorDisplay from "../components/sectorsDisplay";
import StockCard from "../components/StockCard";
import NewsCard from "../components/newsCard";

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 97vh;
  margin-top: 2%;
  align-items: center;
  justify-content: space-between;
  /* position: fixed; */

  /* border-style: solid;
  border-color: white; */
  .main {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    .sectors {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      overflow: scroll;
      flex-direction: column;
      border-radius: 25px;

      /* position: fixed; */
    }

    .leftSide {
      border-radius: 25px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 25%;
      margin-left: 120px;
      margin-top: 10px;
      margin-bottom: 10px;
      /* position: fixed; */
      /* border-style: solid;
      border-color: rgb(99, 156, 199); */

      .prof {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
        border-radius: 25px;
        /* border-top: 3px solid white; */

        /* border-style: solid;
        border-color: white; */
        height: 25%;
        width: 100%;
        /* background-color: rgb(40, 40, 40); */
        background-color: rgb(0, 115, 175);
      }

      .sectors {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
        /* border-left: 4px solid rgb(0, 115, 175); */
        /* border-left: 4px solid rgb(118, 175, 160); */
        /* border-left: 4px solid green; */
        border-left: 4px solid rgb(1, 150, 179);
        height: 48%;
        width: 100%;
        background-color: rgb(40, 40, 40);
      }

      .news {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
        border-radius: 25px;

        /* border-style: solid;
        border-color: white; */
        height: 20%;
        width: 100%;
        /* background-color: rgb(40, 40, 40); */
        background-color: white;
      }
    }

    .rightSide {
      border-radius: 25px;
      /* border-left: 3px solid white; */
      border-top: 6px solid white;
      background-color: rgb(40, 40, 40);
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      width: 25%;
      margin-right: 120px;
      margin-top: 10px;
      margin-bottom: 10px;
      /* border-left: 3px solid rgb(219, 158, 57); */
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 1);
      /* border-style: solid; */
      /* background-color: rgba(99, 156, 199); */
      /* border-color: rgb(99, 156, 199); */
    }

    .feed {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 35%;
      margin: 10px;
      /* flex-wrap: wrap; */
      height: 27000px;
      /* border-style: solid; */
      /* border-color: rgb(99, 156, 199); */
      /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5); */
      overflow: scroll;
    }
  }
`;

export class HomePage extends React.Component {
  componentDidMount() {
    this.props.getSectors();
    // this.props.getNews();
    this.props.getFeaturedStocks();
    // debugger;
  }

  render() {
    return (
      <HomePageWrapper>
        <div className="main" onClick={this.showMe}>
          <div className="leftSide">
            <div className="prof"> Mini Prof Card</div>
            <div className="sectors">
              {Object.entries(this.props.sectors).map(sector => {
                return <SectorDisplay sector={sector} key={sector} />;
              })}
            </div>
            <div className="news">Trending news #</div>
          </div>
          <div className="feed">
            {/* {this.props.news.map(art => {
              return <NewsCard details={art} key={art.title} />;
            })} */}
          </div>
          <div className="rightSide">
            {this.props.stocks.map(stock => {
              return <StockCard details={Object.values(stock)[0]} />;
            })}
          </div>
        </div>
      </HomePageWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    sectors: state.sectors,
    news: state.news,
    stocks: state.presetStocks
  };
};

export default connect(
  mapStateToProps,
  { getSectors, getNews, getFeaturedStocks }
)(HomePage);
