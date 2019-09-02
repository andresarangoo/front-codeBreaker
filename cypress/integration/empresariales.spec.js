describe('My first e2e testing', function(){
    /*
    it('Check website', function(){
        //Arange
        //-visit some place
        cy.visit('https://example.cypress.io')

        //Act
        //Search a element & click
        cy.contains('type').click()

        //Assert
        //Check url
        cy.url()
            .should('include', 'commands/action')

        //
        cy.get('.action-email') //# si es el id, . si es la class
            .type('andres.ao568@gmail.com')
            .should('have.value', 'andres.ao568@gmail.com')
    })*/

    it('MELI test', function(){
        cy.visit('http://localhost:4200/')
        cy.pause()
        cy.contains('Andres')
        cy.get('#setSecretInput')
            .type('1234')
            .should('have.value', '1234')
        cy.get('#setSecretButton')
            .click()
        cy.contains('ok, let the game begins')

        cy.get('#setGuessInput')
            .type('1234')
            .should('have.value', '1234')
        cy.get('#setGuessButton')
            .click()
        cy.contains('XXXX')
    })
})