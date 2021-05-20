import React from "react";

import { Route, NavLink, HashRouter } from "react-router-dom";
class Home extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className="Home">
          <h1>Home页面</h1>
          <NavLink exact to="/home/recod">
            推荐
          </NavLink>
          <NavLink exact to="/home/toplist">
            排行榜
          </NavLink>
          <NavLink exact to="/home/playlist">
            歌单
          </NavLink>

          <Route path="/home/recod" component={Recod}></Route>
          <Route path="/home/toplist" component={Toplist}></Route>
          <Route path="/home/playlist" component={Playlist}></Route>
        </div>
      </HashRouter>
    );
  }
}

const Recod = () => {
  return (
    <div>
      <h3>我是推荐</h3>
    </div>
  );
};
const Toplist = () => {
  return (
    <div>
      <h3>我是排行榜</h3>
    </div>
  );
};
const Playlist = () => {
  return (
    <div>
      <h3>我是歌单</h3>
    </div>
  );
};
export default Home;
