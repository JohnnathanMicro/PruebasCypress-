
describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/login')
    
    cy.contains('IUNCUS SGCN').click()
    cy.get('input[name=username]').type('admin')
    
    cy.get('input[name=password]').type('1')
    cy.contains('Iniciar sesión').click()

    cy.visit('http://localhost:4200/incidentes/bitacora-incidentes-detalle/3', {failOnStatusCode: false});
    cy.contains('Agregar Registro').click()
    cy.get('input[id=labelInputNombre]').type('Cypress Prueba')
    
    cy.get('.ng-select')
    .should('have.value', '').click()
    cy.get('.ng-dropdown-panel')
    .should('have.value', '').click()
    //cy.get('input[id=labelInputNombre]').type('Cypress Prueba')
    //cy.get('.ng-select')
  //.should('have.value', '').click()
  //cy.get('.ng-dropdown-panel')
  //.should('have.value', '').click()
  //cy.get('button').contains('Guardar').click()
  cy.get('ngb-modal-window').contains('Guardar').click()
  
  cy.get('form').submit()
  //cy.intercept('POST', '/users', { fixture: '{formato_incidente:6,nombre:prueba 2,tipo_contenido:3}' }).as('userSuccess')

  //#id
  //.class
  //[attribute='value']
  //.class[attribute='value']
  })
})