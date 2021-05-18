import React from "react";
import App from "../App";
class Way extends React.Component {
  render() {
    return (
      <div>
        <App
          wayone={(a) => {
            return (
              <div>
                {a.x}----{a.y}
              </div>
            );
          }}
        ></App>
      </div>
    );
  }
}
export default Way;
