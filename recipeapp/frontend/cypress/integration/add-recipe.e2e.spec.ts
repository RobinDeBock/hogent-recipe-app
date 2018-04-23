describe('add recipe', () => {
    beforeEach(() => {
        cy.prepTest();
    });

    it('should be possible to add a recipe with one ingredient', () => {
        cy.login();

        cy.visit('recipe/add');

        cy.get('[data-test=recipeName]').type('Mayonnaise');

        [{amount: '1', type: 'Liter', name: 'first'}].forEach(
            ingredient => {
                cy.get('[data-test=ingredientAmount]').last().type(ingredient.amount);
                cy.get('[data-test=intgredientType]').last().select(ingredient.type);
                cy.get('[data-test=ingredientName]').last().type(ingredient.name);
            }
        );

        cy.get('[data-test=addRecipeBtn]').click();

        cy.get('[data-test=recipeName]').should('be.empty');
    });

    it('should be possible to add a recipe with multiple ingredients', () => {
        cy.login();

        cy.visit('recipe/add');

        cy.get('[data-test=recipeName]').type('Mayonnaise');

        const addElement = ingredient => {
            cy.get('[data-test=ingredientAmount]').last().type(ingredient.amount);
            cy.get('[data-test=intgredientType]').last().select(ingredient.type);
            cy.get('[data-test=ingredientName]').last().type(ingredient.name);
        };

        [
            {amount: '1', type: 'Liter', name: 'first'},
            {amount: '2', type: 'Gram', name: 'second'},
            {amount: '3', type: 'Tbsp', name: 'third'},
        ].forEach(
            (ingredient, index) => {
                addElement(ingredient);
                cy.get('[data-test=ingredientAmount]').should('have.length', index + 2);
            }
        );

        cy.get('[data-test=addRecipeBtn]').click();

        cy.get('[data-test=recipeName]').should('be.empty');
    });
});
