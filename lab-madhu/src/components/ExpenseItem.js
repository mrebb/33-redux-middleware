import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpense, updateExpense } from '../store/expense'; 
import ExpenseForm from './ExpenseForm';
import styled from 'styled-components';

const Div = styled.div`
  margin: 40px;
  align-content: center;
  width:175px;
  background-color: rgb(204, 255, 204);
  border-radius: 25px;
  border: 5px outset rgb(255, 153, 153);
  &:hover {
   background-color: rgb(153, 204, 255);
 }
`;

class ExpenseItem extends Component {

  state = {
    editing: false
  }

  onDelete = () => {
    this.props.removeExpense(this.props.expense);
  }

  onEdit = () => {
    this.setState({ editing: true })
  }

  onUpdate = (expense) => {
    this.props.updateExpense(expense);
    this.setState({editing: false});
  }

  render() {
    return (
    <Div>
      <li onClick={this.onEdit}>
        <p>
          {this.props.expense.name}
        </p>
        <p>
        ${this.props.expense.price}
        </p>
        <p>
          {new Date(this.props.expense.timestamp).toLocaleDateString()}
        </p>
        <p>
          <button onClick={this.onDelete}>x</button>
        </p>

        {this.state.editing && <ExpenseForm onComplete={this.onUpdate} buttonText="Edit" expense={this.props.expense} />}
      </li>
      </Div>
    );
  }
}



const mapDispatchToProps = (dispatch) => ({
  removeExpense: expense => dispatch(removeExpense(expense)),
  updateExpense: expense => dispatch(updateExpense(expense)),
});

ExpenseItem.propTypes = {
  removeExpense: PropTypes.func,
  updateExpense: PropTypes.func,
  expense: PropTypes.object,
}

export default connect(null, mapDispatchToProps)(ExpenseItem);


