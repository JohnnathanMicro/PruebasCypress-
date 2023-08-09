
describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/login')
    
    cy.contains('IUNCUS SGCN').click()
    cy.get('input[name=username]').type('admin')
    
    cy.get('input[name=password]').type('1')
    cy.contains('Iniciar sesión').click()

    cy.visit('http://localhost:4200/recomendaciones/maestro-recomendacion', {failOnStatusCode: false});
    cy.contains('Agregar').click()
    cy.get('input[id=labelInputNombre]').type('Cypress Prueba Recomend')
    
  cy.get('button').contains('Guardar').click()
  cy.get('ngb-modal-window').contains('Guardar').click()
  cy.wait(4000)

  //#id
  //.classa
  //[attribute='value']
  //.class[attribute='value']
  })
})