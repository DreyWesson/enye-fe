import React from "react";
import "./styles/Loading.css";

function Loading(Component) {
  return function LoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <div className="loader__container">
        <div id="loader" className="m-auto mt-5 py-5"></div>
      </div>
    );
  };
}
export default Loading;
