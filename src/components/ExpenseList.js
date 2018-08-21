import React from 'react';
import ExpenseItem from './ExpenseItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ExpenseList extends React.Component{
  
  render(){
  return (
    <ul>{
      this.props.expenses.filter((expense)=>this.props.categoryID === expense.categoryID).map(expense =>{
        return <ExpenseItem key={expense.id} expense={expense} />
      })
    }</ul>
  );
}
};

const mapStateToProps = (state) => ({ expenses: state.expenseState.expenses });

export default connect(mapStateToProps, null)(ExpenseList);

ExpenseList.propTypes = {
  expenses: PropTypes.arrayOf(Object)
}