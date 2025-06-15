describe("Manager's Hub Reminder Flow", () => {
  it("should add a reminder and display it", () => {
    cy.visit('http://localhost:3000');

    cy.get('input[placeholder="Naslov"]').type('Sastanak');
    cy.get('input[type="date"]').type('2025-06-15');
    cy.get('input[placeholder="Napomena"]').type('Donijeti dokumente');
    cy.contains('Dodaj podsjetnik').click();

    cy.contains('Sastanak').should('exist');
    cy.contains('2025-06-15').should('exist');
  });
});
