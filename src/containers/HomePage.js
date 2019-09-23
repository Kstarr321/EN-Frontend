import React from "react";
import styled from "styled-components";
// import SectorDisplay from "../components/sectorsDisplay";
import { connect } from "react-redux";
import { getSectors } from "../redux/actions";
import { getNews } from "../redux/actions";
import SectorDisplay from "../components/sectorsDisplay";
import NewsCard from "../components/newsCard";
// import { NavBar } from "../components/nav";

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
      /* position: fixed; */
    }

    .leftSide {
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
        /* border-style: solid;
        border-color: white; */
        height: 25%;
        width: 100%;
      }

      .sectors {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
        border-left: 5px solid rgb(118, 175, 160);
        height: 48%;
        width: 100%;
      }

      .news {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
        /* border-style: solid;
        border-color: white; */
        height: 20%;
        width: 100%;
      }
    }

    .rightSide {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      width: 25%;
      margin-right: 120px;
      margin-top: 10px;
      margin-bottom: 10px;
      border-left: 3px solid rgb(219, 158, 57);
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
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
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
      overflow: scroll;
    }
  }
`;

export class HomePage extends React.Component {
  componentDidMount() {
    this.props.getSectors();
    this.props.getNews();
    // debugger;
  }

  renderNewsCards = () => {
    // debugger;
  };

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
            {/* <NewsCard />
            <NewsCard />
            <NewsCard /> */}
            {/* <NewsCard /> */}

            {this.props.news.map(art => {
              return <NewsCard details={art} key={art.title} />;
            })}
          </div>
          <div className="rightSide"></div>
        </div>
      </HomePageWrapper>
    );
  }
}

const mapStateToProps = state => {
  return { sectors: state.sectors, news: state.news };
};

export default connect(
  mapStateToProps,
  { getSectors, getNews }
)(HomePage);

// <p>
//   **I will be responsible for rendering: newsFeed => statsBox =>
//   predictRibbon => navBar => leaderboard => miniChars => miniWatchList**
// </p>
