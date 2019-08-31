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
        cy.contains('Estefany')
        cy.get('input')
            .type('iphone 8 plus 64gb')
            .should('have.value', 'iphone 8 plus 64gb')
        cy.get('button')
            .click()
        cy.contains('iPhone')

        cy.get('input')
            .clear()
            .type('Nikon D750')
            .should('have.value', 'Nikon D750')
        cy.get('button')
            .click()
        cy.contains('Nikon')
    })
})