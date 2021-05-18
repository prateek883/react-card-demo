import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";

class MyCarousel extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "100vh",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle",
      marginBottom:"0rem"
    };
  }

  static get CARD_STYLE() {
    return {
      height: "400px",
      width: "800px",
      paddingTop: "80px",
      textAlign: "center",
      background: "#5e72eb",
      color: "#FFF",
      fontSize:"45px",
      fontFamily: "sans-serif",
      textTransform: "uppercase",
      borderRadius: "10px",
      boxSizing: "border-box"
    };
  }

  render() {
    return (
      <div style={MyCarousel.CONTAINER_STYLE}>
        <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
          <div style={MyCarousel.CARD_STYLE}>WELCOME TO OSTELLO BLOG</div>
          <div style={MyCarousel.CARD_STYLE}>Check out all the awesome blogs</div>
          <div style={MyCarousel.CARD_STYLE}>HELLO</div>
        </ReactCardCarousel>
      </div>
    );
  }
}

export default MyCarousel

const rootElement = document.getElementById("root");
ReactDOM.render(<MyCarousel />, rootElement);
