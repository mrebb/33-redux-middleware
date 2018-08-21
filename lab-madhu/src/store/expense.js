import uuid from 'uuid/v4';
import defaultState from './defaultState';

// Action types
export const EXPENSE_CREATE = 'Expense/EXPENSE_CREATE';
export const EXPENSE_DESTROY = 'Expense/EXPENSE_DESTROY';
export const EXPENSE_UPDATE = 'Expense/EXPENSE_UPDATE';

// Reducer
export default function reducer(state = defaultState, action) {
  const {type, payload} = action;

  switch (type) {

    case EXPENSE_CREATE:
   
      payload.id = uuid();
      payload.timestamp = new Date();
      return {
        ...state,
        expenses: [...state.expenses, payload]
      };

    case EXPENSE_DESTROY: 
      
    return {
      ...state,
      expenses: state.expenses.filter(expense => expense.id !== payload.id)
    };

    case EXPENSE_UPDATE:

      return {
        ...state,
        expenses: state.expenses.map(expense => expense.id === payload.id ? payload : expense)
      }

    default: return state;
  }
}

// Action Creators
export function addExpense(expense) {
  return {
    type: EXPENSE_CREATE,
    payload: expense
  }
}

export function updateExpense(expense) {
  return {
    type: EXPENSE_UPDATE,
    payload: expense
  }
}

export function removeExpense(expense) {
  return {
    type: EXPENSE_DESTROY,
    payload: expense
  }
}