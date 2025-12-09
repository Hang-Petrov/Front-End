import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
      <div style={{ maxWidth: "1000px", margin: "20px auto", padding: "20px", backgroundColor: "#ffffff", borderRadius: "20px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
        {this.props.children}
      </div>
    );
  }
}

export default Content;
