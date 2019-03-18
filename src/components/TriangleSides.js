import React, { Component } from "react";
import { connect } from "react-redux";
import { decideType } from "./decideType";
import { setTriangleType } from "../actions/baseAction";
import "../styles/TriangleSides.css";

class triangleSides extends Component {
  constructor(props) {
    super(props);
    this.emptySides = this.emptySides.bind(this);
    this.TriangleType = this.TriangleType.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      leftSide: 0,
      rightSide: 0,
      bottomSide: 0
    };
  }
  emptySides() {
    this.setState({
      leftSide: 0,
      rightSide: 0,
      bottomSide: 0
    });
    this.props.setTriangleType("Bill is angry!");
  }
  TriangleType(s) {
    this.props.setTriangleType(decideType(s));
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    let sides = {
      leftSide: this.state.leftSide,
      rightSide: this.state.rightSide,
      bottomSide: this.state.bottomSide
    };
    if (value > 0) {
      sides[name] = value;
      this.TriangleType(sides);
      this.setState({ [name]: value });
    }
  }

  render() {
    return (
      <div className="fields" data-ts="Board">
        <div data-ts="Panel">
          <div>
            <form data-ts="Form">
              <fieldset>
                <label>
                  <span>Left side</span>
                  <input
                    name="leftSide"
                    value={this.state.leftSide}
                    onChange={this.handleChange}
                    type="number"
                    min="0"
                    steps="any"
                  />
                </label>
              </fieldset>
              <fieldset>
                <label>
                  <span>Right side</span>
                  <input
                    name="rightSide"
                    value={this.state.rightSide}
                    onChange={this.handleChange}
                    type="number"
                    min="0"
                    steps="any"
                  />
                </label>
              </fieldset>
              <fieldset>
                <label>
                  <span>Number</span>
                  <input
                    name="bottomSide"
                    value={this.state.bottomSide}
                    onChange={this.handleChange}
                    type="number"
                    min="0"
                  />
                </label>
              </fieldset>
            </form>
          </div>
        </div>
        <button
          data-ts="Button"
          data-ts_busy="true"
          className="ts-primary"
          onClick={this.emptySides}
        >
          <span>Empty Fields</span>
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setTriangleType: type => dispatch(setTriangleType(type))
});

const mapStateToProps = state => ({
  ...state
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(triangleSides);
