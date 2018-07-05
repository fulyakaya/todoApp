import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getToDoList } from "../actions/items";

class ReduxConnectedComponent extends Component {
  constructor() {
    super();
    this.state = {
      alert: null
    };
  }
  componentDidMount() {
    this.props.getToDoList();
  }
  render() {
      return (
        <ul>
          {this.props.items.todoList.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
      );
    }
  }
  

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

ReduxConnectedComponent.propTypes = {
  items: PropTypes.object.isRequired,
  getToDoList: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { getToDoList }
)(ReduxConnectedComponent);
