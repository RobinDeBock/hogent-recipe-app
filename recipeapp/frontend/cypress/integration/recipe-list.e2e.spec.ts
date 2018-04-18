import '../support/commands';

describe('Recipe list', () => {
    beforeEach(() => {
        cy.prepTest();
        cy.login();

        const recipe1 = {
            name: 'Recipe name',
            ingredients: [
                {
                    name: 'First',
                    amount: '1',
                    unit: 'Liter'
                }
            ],
            created: '2018-04-16T13:15:50.902Z'
        };
        const recipe2 = {
            name: 'Recipe name2',
            ingredients: [
                {
                    name: 'Second',
                    amount: '2',
                    unit: 'Gram'
                }
            ],
            created: '2018-04-16T13:15:50.902Z'
        };

        cy.addRecipe(recipe1);
        cy.addRecipe(recipe2);
    });

    it('should show a list of recipes', () => {
        cy.visit('/');
        cy.get('[data-test=recipe]').should('have.length', 2);
    });

    it('should be possible to remove an recipe from the list', () => {
        cy.visit('');
        cy.get('[data-test=removeRecipeBtn]').last().click();
        cy.get('[data-test=recipe]').should('have.length', 1);
    });
});
