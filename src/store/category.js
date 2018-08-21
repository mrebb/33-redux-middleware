import uuid from 'uuid/v4';
import defaultState from './defaultState';

// Action types
export const CATEGORY_CREATE = 'Category/CATEGORY_CREATE';
export const CATEGORY_DESTROY = 'Category/CATEGORY_DESTROY';
export const CATEGORY_UPDATE = 'Category/CATEGORY_UPDATE';

// Reducer
export default function reducer(state = defaultState, action) {
  const {type, payload} = action;
  
  switch (type) {

    case CATEGORY_CREATE:
      payload.id = uuid();
      payload.timestamp = new Date();
      return {
        ...state,
        categories: [...state.categories, payload]
      };

    case CATEGORY_DESTROY: 
      
    return {
      ...state,
      categories: state.categories.filter(cat => cat.id !== payload.id)
    };

    case CATEGORY_UPDATE:

      return {
        ...state,
        categories: state.categories.map(cat => cat.id === payload.id ? payload : cat)
      }

    default: return state;
  }
}

// Action Creators
export function addCategory(category) {
  return {
    type: CATEGORY_CREATE,
    payload: category
  }
}

export function updateCategory(category) {
  return {
    type: CATEGORY_UPDATE,
    payload: category
  }
}

export function removeCategory(category) {
  return {
    type: CATEGORY_DESTROY,
    payload: category
  }
}