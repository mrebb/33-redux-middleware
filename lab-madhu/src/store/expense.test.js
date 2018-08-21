import reducer, { addExpense, updateExpense, removeExpense,EXPENSE_CREATE,EXPENSE_UPDATE,EXPENSE_DESTROY} from '../store/expense';

describe('expense state', () => {

  describe('expense actions', () => {

    it('should create add action', () => {

      const expense = {name:'tacos', price:100};

      const action = addExpense(expense);

      expect(action.type).toBe(EXPENSE_CREATE);

      expect(action.payload).toEqual(expense);
    });
    it('should create update action', () => {

      const expense = {name:'tacos', price:100};

      const action = updateExpense(expense);

      expect(action.type).toBe(EXPENSE_UPDATE);

      expect(action.payload).toEqual(expense);
    });
    it('should create delete action', () => {

      const expense = {name:'tacos', price:100};

      const action = removeExpense(expense);

      expect(action.type).toBe(EXPENSE_DESTROY);

      expect(action.payload).toEqual(expense);
    });

  });

  describe('expense reducer', () => {

    it('should add to empty list', () => {

      const expense = {name:'tacos', price:100,categoryID:1234};
      const action = addExpense(expense);

      const state = reducer({expenses:[]}, action);

      expect(state.expenses.length).toBe(1);

      expect(state.expenses[0].name).toBe(expense.name);

      expect(state.expenses[0].price).toBe(expense.price);

      expect(state.expenses[0].timestamp).toBeDefined();

      expect(state.expenses[0].id).toBeDefined();
      expect(state.expenses[0].categoryID).toEqual(1234)

    });

    it('should update expense', () => {

      const expense = {name:'cokes', price:15};
      const addAction = addExpense(expense);
      let state = reducer({expenses:[]}, addAction);
      const catToRemove = {...state.expenses[0]};
      catToRemove.price = 10;
      const deleteAction = updateExpense(catToRemove);
      const updatedState = reducer(state, deleteAction);
      expect(updatedState.expenses[0].price).toBe(10);
    });
    it('should delete expense', () => {

      const expense = {name:'burger', price:200};

      const addAction = addExpense(expense);

      let state = reducer({expenses:[]}, addAction);

      const catToRemove = {...state.expenses[0]};

      const deleteAction = removeExpense(catToRemove);

      const updatedState = reducer(state, deleteAction);

      expect(updatedState.expenses.length).toBe(0);

    });
  });
});