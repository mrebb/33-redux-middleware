import { createStore,combineReducers,applyMiddleware } from 'redux';
import categoryState from './category';
import expenseState from './expense';
import logger from '../middleware/logger';
import validator from '../middleware/validator';
const appReducer = combineReducers({categoryState,expenseState});

export default createStore(appReducer, applyMiddleware(logger,validator));  