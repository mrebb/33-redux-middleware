import reducer, { addCategory, updateCategory, removeCategory,CATEGORY_CREATE,CATEGORY_UPDATE,CATEGORY_DESTROY} from '../store/category';

describe('category state', () => {

  describe('category actions', () => {

    it('should create add action', () => {

      const category = {name:'food', budget:100};

      const action = addCategory(category);

      expect(action.type).toBe(CATEGORY_CREATE);

      expect(action.payload).toEqual(category);
    });
    it('should create update action', () => {

      const category = {name:'food', budget:100};

      const action = updateCategory(category);

      expect(action.type).toBe(CATEGORY_UPDATE);

      expect(action.payload).toEqual(category);
    });
    it('should create delete action', () => {

      const category = {name:'food', budget:100};

      const action = removeCategory(category);

      expect(action.type).toBe(CATEGORY_DESTROY);

      expect(action.payload).toEqual(category);
    });

  });

  describe('category reducer', () => {

    it('should add to empty list', () => {

      const category = {name:'food', budget:100};

      const action = addCategory(category);

      const state = reducer({categories:[]}, action);

      expect(state.categories.length).toBe(1);

      expect(state.categories[0].name).toBe(category.name);

      expect(state.categories[0].budget).toBe(category.budget);

      expect(state.categories[0].timestamp).toBeDefined();

      expect(state.categories[0].id).toBeDefined();

    });

    it('should update category', () => {

      const category = {name:'booze', budget:15};
      const addAction = addCategory(category);
      let state = reducer({categories:[]}, addAction);
      const catToRemove = {...state.categories[0]};
      catToRemove.budget = 10;
      const deleteAction = updateCategory(catToRemove);
      const updatedState = reducer(state, deleteAction);
      expect(updatedState.categories[0].budget).toBe(10);
    });
    it('should delete category', () => {

      const category = {name:'Food', budget:200};

      const addAction = addCategory(category);

      let state = reducer({categories:[]}, addAction);

      const catToRemove = {...state.categories[0]};

      const deleteAction = removeCategory(catToRemove);

      const updatedState = reducer(state, deleteAction);


      expect(updatedState.categories.length).toBe(0);






    });
  });
});