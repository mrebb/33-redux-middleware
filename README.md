![cf](http://i.imgur.com/7v5ASc8.png) 33: Budget Tracker
======

## Documentation
  * This is a budget tracker application that lets you create different categories having name, budget and expenses linked under each category using React & Redux middleware. 

#### Validations

* Prevents an item from being added or updated if it's over budget.
* Prevents a budget from being created or updated with zero or less dollars.
* Prevents a budget or item from being created or updated without a name.
* Prevents an expense item from being created if all expense items together go over maximum budget alloted for category

## Technologies
* JavaScript
* Nodejs
* React
* Redux
* Sass(css)

## Example Validation Middleware
Here's an example validating middleware for an application that implements a
[kanban board](https://leankit.com/learn/kanban/kanban-board/).

This middleware ensures that data attached to the action satisfies requirements,
like having certain properties (id, content, categoryId).

```js
const validateCard = store => next => action => {
  const isCard = action.type && action.type.startsWith('CARD');
    if (isCard) {
      try {
        const card = action.payload;
        const notValid = !card.id || !card.content || !card.categoryID;
        if (notValid) {
          throw new Error('VALIDATION ERROR: card must include id, content, and categoryID');
        } else {
          return next(action);
        }
      } catch (err) {
        console.error(err);
    }
  } else {
    return next(action);
  }
}

export default validateCard;
```