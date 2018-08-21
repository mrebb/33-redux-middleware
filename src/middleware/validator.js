const validator = store=>next=>action=> {
if(action.type==='Category/CATEGORY_CREATE'){
    if(parseInt(action.payload.budget,10)<= 0){
        throw new Error('Budget should be greater than zero')
    }
    if(action.payload.name===''){
        console.log('name',action.payload.name)
        throw new Error('category name should not be left blank')
        
    }
}
if(action.type==='Expense/EXPENSE_CREATE'){
   let categoryID = action.payload.categoryID;
    let expensePrice = action.payload.price;
    let currentState = store.getState();
    let category = currentState.categoryState.categories.find(category=>category.id===categoryID);
    let maxBudget = parseInt(category.budget,10);
    if(parseInt(expensePrice,10)<= 0){
        throw new Error('expense should be atleast greater than zero $')
    }
    if(parseInt(expensePrice,10)>maxBudget){
        throw new Error('expense should not cross available budget')
    }
    if(action.payload.name===''){
        throw new Error('expense name should not be left blank')
    }
}
if(action.type==='Expense/EXPENSE_UPDATE' && action.payload.isEditing===false){
    let categoryID = action.payload.categoryID;
     let expensePrice = action.payload.price;
     let currentState = store.getState();
     let category = currentState.categoryState.categories.find(category=>category.id===categoryID);
     let maxBudget = parseInt(category.budget,10);
     if(parseInt(expensePrice,10)<= 0){
         throw new Error('expense should be atleast greater than zero $')
     }
     if(parseInt(expensePrice,10)>maxBudget){
         throw new Error('expense should not cross available budget')
     }
     if(action.payload.name===''){
         throw new Error('expense name should not be left blank')
     }
 }

let result = next(action);
return result;
}

export default validator;

// export const CATEGORY_CREATE = 'Category/CATEGORY_CREATE';
// export const CATEGORY_DESTROY = 'Category/CATEGORY_DESTROY';
// export const CATEGORY_UPDATE = 'Category/CATEGORY_UPDATE';