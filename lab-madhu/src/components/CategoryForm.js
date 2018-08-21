import React, { Component } from "react";
import PropTypes from 'prop-types';

class CategoryForm extends Component {
  
  constructor(props) {
    super(props);
    this.defaultState = {
      name: '',
      budget: ''
    };

    const initialState = this.props.category || this.defaultState;

    this.state =  {...initialState};
  }
  
  onSubmit = event => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState({ ...this.defaultState });
  };

  onChange = event => {
    const val =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    const changedBit = {
      [event.target.name]: val
    };
    this.setState(changedBit);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input name="name" placeholder="Category" value={this.state.name} onChange={this.onChange} />
        <input name="budget" type="number" value={this.state.budget} onChange={this.onChange} />
        <button>{this.props.buttonText}</button>
      </form>
    );
  }
}

CategoryForm.propTypes = {
  onComplete: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  category: PropTypes.object,
}

CategoryForm.defaultProps = {
  category: {
    name: '',
    budget: 0
  }
}

export default CategoryForm;

