# msw issue when used with Cypress cy.clock

Demonstrates that MSW delay never returns if a Cypress test makes use of 'cy.clock' to mock timers

To run:
``npx cypress open``

Then click on 'Component Testing', select a browser (I used Chrome) and click 'Start Component Testing in Chrome'.

Select 'App.cy.jsx' from the list of specs, this contains 2 tests. The 1st test fails as it hits a MSW handler that features an 'await delay()' call. The 2nd test passes as it hits a handler with no 'delay' call.

Looking at the new 'delay.ts' code in MSW shows it makes use of setTimeout, so I'm guessing it is affected by the Cypress mocking. The old code (1.3.2) appears to use a different mechanism to inject the delay into the response.

New code: https://github.com/mswjs/msw/blob/15e3006cdbcf1d23312252960ee2920d2011d1bb/src/core/delay.ts#L69

Old code: https://github.com/mswjs/msw/blob/2f7215294cac98149757f57118c7492d31a2a8e0/src/context/delay.ts#L69