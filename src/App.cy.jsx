import React from 'react';
import App from './App';

/* eslint-disable no-undef */
describe('cypress and msw timer issues', () => {
  it('requests data (delay)', () => {
    cy.clock();
    cy.mount(<App />);
    cy.tick(11000);
    cy.get('#with-delay').click();
    cy.get('#data').contains('["Tom","Jerry","Spike"]');
  });    

  it('requests data (no delay)', () => {
    cy.clock();
    cy.mount(<App />);
    cy.tick(11000);
    cy.get('#with-no-delay').click();
    cy.get('#data').contains('["Tom","Jerry","Spike"]');
  });
})