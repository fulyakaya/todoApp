import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getToDoList, addItemToDoList } from "../actions/items";

class ReduxConnectedComponent extends Component {
  constructor() {
    super();
    this.state = {
      alert: null,
      newItem: ""
    };
  }
  componentDidMount() {
    this.props.getToDoList();
  }
  render() {
    console.log(this.props.items)
    return (
      <div>
        <input
          className="form-control"
          type="text"
          value={this.state.newItem}
          placeholder="ENTER NEW TO DO"
          onChange={event =>
            this.setState({
              newItem: event.target.value
            })
          }
        />
        <button
          onClick={() => {
            console.log(this.state.newItem);
            this.props.addItemToDoList(this.state.newItem);
          }}
        >
          {" "}
          ADD{" "}
        </button>
        <ul>
          {this.props.items.todoList.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
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
  getToDoList: PropTypes.func.isRequired,
  addItemToDoList: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { getToDoList, addItemToDoList }
)(ReduxConnectedComponent);
