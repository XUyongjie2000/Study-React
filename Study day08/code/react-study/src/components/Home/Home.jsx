import React from "react";
const Home = React.memo(() => {
  console.log("Home组件更新");
  return <div>我是Home组件</div>;
});

export default Home;
