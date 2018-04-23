## Setup

### Frontend
```
cd recipeapp/frontend

npm install
```

### Backend
```
cd recipeapp/backend

npm install
```

## Starting both apps

### Frontend
```
cd recipeapp/frontend

npm start
```

### Backend
```
cd recipeapp/backend

npm start
```

## Exercises
Start cypress:
```
cd recipeapp/frontend

npm run cypress:open
```

Implement all the TODO's in the application. You can find them under 'recipeapp/frontend/cypress/integrations'.


### Assertions to be used
have.length
be.empty
be.disabled
include

Use them like this: "cy.get('selector').should('have.length', 1);"