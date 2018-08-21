const validator = store=>next=>action=> {
if(action.type==='Category/CATEGORY_CREATE'){
    if(parseInt(action.payload.budget,10)<= 0 || action.payload.budget===''){
        throw new Error('ValidationError: Budget should be greater than zero')
    }
    if(action.payload.name===''){
        throw new Error('ValidationError: category name should not be left blank')
        
    }
}
if(action.type==='Expense/EXPENSE_CREATE'){
   let categoryID = action.payload.categoryID;
    let expensePrice = action.payload.price;
    let currentState = store.getState();
    let category = currentState.categoryState.categories.find(category=>category.id===categoryID);
    let maxBudget = parseInt(category.budget,10);
    let priceArray = currentState.expenseState.expenses.filter(expense=>expense.categoryID===categoryID).map(expense=>parseInt(expense.price,10))
     let totalExpenses=priceArray.reduce((prev,acc)=>prev+acc,0)
     totalExpenses = totalExpenses+parseInt(expensePrice,10);
          if(totalExpenses>maxBudget){
             throw new Error('ValidationError: expenses together should not cross  budget alloted for a specific category')
         }
    if(parseInt(expensePrice,10)<= 0 || expensePrice===''){
        throw new Error('ValidationError: expense should be atleast greater than zero $')
    }
    if(parseInt(expensePrice,10)>maxBudget){
        throw new Error('ValidationError: expense should not cross available budget')
    }
    if(action.payload.name===''){
        throw new Error('ValidationError: expense name should not be left blank')
    }
}
if(action.type==='Expense/EXPENSE_UPDATE' ){
    let categoryID = action.payload.categoryID;
    let expensePrice = action.payload.price;
    let currentState = store.getState();
    let category = currentState.categoryState.categories.find(category=>category.id===categoryID);
    let maxBudget = parseInt(category.budget,10);
    let priceArray = currentState.expenseState.expenses.filter(expense=>expense.categoryID===categoryID).map(e=>parseInt(e.price,10))
     let totalExpenses=priceArray.reduce((prev,acc)=>prev+acc,0)
     totalExpenses = totalExpenses+parseInt(expensePrice,10);
          if(totalExpenses>maxBudget){
             throw new Error('ValidationError: expenses together should not cross the budget alloted for a specific category')
         }
     if(parseInt(expensePrice,10)<= 0){
         throw new Error('ValidationError: expense should be atleast greater than zero $')
     }
     if(parseInt(expensePrice,10)>maxBudget){
         throw new Error('ValidationError: expense should not cross available budget')
     }
     if(action.payload.name===''){
         throw new Error('ValidationError: expense name should not be left blank')
     }
 }

let result = next(action);
return result;
}
export default validator;