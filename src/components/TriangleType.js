import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/TriangleType.css";
import bill from "../bill.gif";

class triangleSides extends Component {
  render() {
    return (
      <div className="type">
        <img src={bill} className="App-logo" alt="Bill is hiding" />
        <h1>{this.props.baseReducer.triangle_type}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(triangleSides);
