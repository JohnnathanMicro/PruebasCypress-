
describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/login')
    
    cy.contains('IUNCUS SGCN').click()
    cy.get('input[name=username]').type('admin')
    
    cy.get('input[name=password]').type('1')
    cy.contains('Iniciar sesión').click()

    cy.visit('http://localhost:4200/incidentes/formato-eventos-interrupcion', {failOnStatusCode: false});
    cy.contains('Agregar').click()
    cy.get('input[id=labelInputNombre]').type('Cypress Prueba')
    
    cy.get('.ng-select')
  .should('have.value', '').click()
  cy.get('.ng-dropdown-panel')
  .should('have.value', '').click()
  //cy.get('button').contains('Guardar').click()
  cy.get('ngb-modal-window').contains('Guardar').click()
  cy.get('form').submit()
  
  cy.intercept('POST', '/users', { fixture: '{nombre: Peligro, lista_responsables: aabadg, tipo_formato: 3}' }).as('userSuccess')

  //#id
  //.class
  //[attribute='value']
  //.class[attribute='value']
  })
})