import React, { Component } from "react";
import PropTypes from 'prop-types';

class ExpenseForm extends Component {
  
  constructor(props) {
    super(props);
    this.defaultState = {
    categoryID: (this.props.category&&this.props.category.id) || this.props.expense.categoryID,
    name: '',
    price:'',
    isEditing: false
    };
    const initialState = this.props.expense || this.defaultState;
    this.state =  {...initialState};
  }
  
  onSubmit = event => {
    event.preventDefault();
    this.setState({isEditing:false});
    this.props.onComplete(this.state);
    this.setState({ ...this.defaultState });
    if(this.props.onUpdate){
        this.props.onUpdate();
    }
  };

  onChange = event => {
    this.setState({isEditing:true});
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
        <input name="name" placeholder="expense" value={this.state.name} onChange={this.onChange} />
        <input name="price" type="number"value={this.state.price} onChange={this.onChange} />
        <button>{this.props.buttonText}</button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  onComplete: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  expense: PropTypes.object,
}
export default ExpenseForm;