import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeCategory, updateCategory } from '../store/category'; 
import { addExpense } from '../store/expense'; 
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import styled from 'styled-components';

const Div = styled.div`
  margin: 40px;
  width:300px;
  background-color: rgb(102, 153, 153);
  border-radius: 25px;
  border: 5px outset rgb(255, 153, 153);
  &:hover {
   background-color: rgb(102, 255, 204);
 }
`;

class CategoryItem extends Component {

  state = {
    editing: false
  }

  onDelete = () => {
    this.props.removeCategory(this.props.category);
  }

  onEdit = (e) => {
    e.preventDefault();
    this.setState({ editing: true })
  }

  onUpdate = () => {
    // this.props.updateCategory(category);
    this.setState({editing: false});
  }

  render() {
    return (
      <Div>
      <li >
        <p>
          {this.props.category.name}
        </p>
        <p>
        ${this.props.category.budget}
        </p>
        <p>
          {new Date(this.props.category.timestamp).toLocaleDateString()}
        </p>
        
        <a href="/expenses" onClick={this.onEdit}><b>+</b></a>
        <p>
          <button onClick={this.onDelete}><b>x</b></button>
        </p>
        
        {this.state.editing && <ExpenseForm category={this.props.category} onUpdate={this.onUpdate} onComplete={this.props.addExpense} buttonText="create" />}
        <ExpenseList categoryID={this.props.category.id}/>
        
      </li>
      </Div>
    );
  }
}



const mapDispatchToProps = (dispatch) => ({
  removeCategory: category => dispatch(removeCategory(category)),
  updateCategory: category => dispatch(updateCategory(category)),
  addExpense: expense => dispatch(addExpense(expense)),
});

CategoryItem.propTypes = {
  removeCategory: PropTypes.func,
  updateCategory: PropTypes.func,
  category: PropTypes.object,
}

export default connect(null, mapDispatchToProps)(CategoryItem);


