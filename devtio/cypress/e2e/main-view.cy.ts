describe('MainView', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render all child components', () => {
    cy.get('main').within(() => {
      cy.get('.hero-section').should('exist'); // Update with actual class
      cy.get('.services-section').should('exist'); // Update with actual class
      cy.get('.about-us').should('exist'); // Update with actual class
      cy.get('.how-we-work').should('exist'); // Update with actual class
      cy.get('.contact-us').should('exist'); // Update with actual class
      cy.get('.footer-section').should('exist'); // Update with actual class
    });
  });

  it('should apply correct styles to the main element', () => {
    cy.get('main').should('have.css', 'display', 'flex');
    cy.get('main').should('have.css', 'flex-direction', 'column');
    cy.get('main').should('have.css', 'align-items', 'center');
    cy.get('main').should('have.css', 'gap', '20px');
  });
});
