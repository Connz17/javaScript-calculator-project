"use strict";

beforeEach(function () {
  //Arrange
  cy.visit('http://127.0.0.1:5500/index.html');
});
describe('testing number buttons', function () {
  it('Press number 123, number 123 should show on screen', function () {
    //Act
    cy.get('#one').click();
    cy.get('#two').click();
    cy.get('#three').click(); //Assert

    cy.get('#screenCurr').should("contain", "123");
  });
});
describe('testing all clear functionality', function () {
  it('pressing the all clear button clears the screen', function () {
    //act
    cy.get('#five').click();
    cy.get('#three').click();
    cy.get('#seven').click();
    cy.get('#AC').click(); //Assert

    cy.get('#screenCurr').should("contain", "");
  });
});
describe('testing the delete button', function () {
  it('pressing the delete button removes the last number pressed', function () {
    //act
    cy.get('#five').click();
    cy.get('#three').click();
    cy.get('#seven').click();
    cy.get('#eight').click();
    cy.get('#delete').click(); //Assert

    cy.get('#screenCurr').should("contain", "537");
  });
});
describe('testing the operation buttons', function () {
  it('pressing the multiply button pushes the number entered and that operation sign to the top of the screen', function () {
    //act
    cy.get('#five').click();
    cy.get('#three').click();
    cy.get('#seven').click();
    cy.get('#multiply').click(); //Assert

    cy.get('#screenPrev').should("contain", "537 X");
  });
});
describe('testing the equals buttons', function () {
  it('pressing the equals button calculates the answer based on the operation selected ', function () {
    //act
    cy.get('#five').click();
    cy.get('#seven').click();
    cy.get('#plus').click();
    cy.get('#eight').click();
    cy.get('#three').click();
    cy.get('#equals').click(); //Assert

    cy.get('#screenCurr').should("contain", "140");
  });
});
describe('testing the decimal buttons', function () {
  it('pressing the decimal button adds a decimal point to the number', function () {
    //act
    cy.get('#five').click();
    cy.get('#seven').click();
    cy.get('#decimal').click();
    cy.get('#eight').click();
    cy.get('#three').click(); //Assert

    cy.get('#screenCurr').should("contain", "57.83");
  });
});
describe('testing the decimal logic', function () {
  it('pressing the decimal more than once should not produce more than 1 decimal per number', function () {
    //act
    cy.get('#five').click();
    cy.get('#seven').click();
    cy.get('#decimal').click();
    cy.get('#decimal').click();
    cy.get('#eight').click();
    cy.get('#three').click();
    cy.get('#decimal').click();
    cy.get('#nine').click();
    cy.get('#one').click(); //Assert

    cy.get('#screenCurr').not("contain", "57..83.91").should("contain", "57.8391");
  });
});
describe('testing the decimal number logic', function () {
  it('pressing the decimal more than once should not produce more than 1 decimal per number', function () {
    //act
    cy.get('#five').click();
    cy.get('#seven').click();
    cy.get('#decimal').click();
    cy.get('#three').click();
    cy.get('#multiply').click();
    cy.get('#nine').click();
    cy.get('#one').click();
    cy.get('#decimal').click();
    cy.get('#eight').click();
    cy.get('#equals').click(); //Assert

    cy.get('#screenCurr').should("contain", "5260.13999");
  });
});
describe('testing the Square root button', function () {
  it('pressing the square root button should find the square root of the number entered', function () {
    //act
    cy.get('#five').click();
    cy.get('#three').click();
    cy.get('#seven').click();
    cy.get('#eight').click();
    cy.get('#root').click(); //Assert

    cy.get('#screenCurr').should("contain", "73.3348");
  });
});
describe('testing the percentage button', function () {
  it('pressing the percentage button calculates the percentage of the numbers', function () {
    //act
    cy.get('#five').click();
    cy.get('#nil').click();
    cy.get('#percentage').click();
    cy.get('#eight').click();
    cy.get('#three').click();
    cy.get('#equals').click(); //Assert

    cy.get('#screenCurr').should("contain", "41.5");
  });
});
describe('testing the minus button', function () {
  it('pressing the minus button takes away one number from the other', function () {
    //act
    cy.get('#seven').click();
    cy.get('#five').click();
    cy.get('#nil').click();
    cy.get('#takeAway').click();
    cy.get('#eight').click();
    cy.get('#three').click();
    cy.get('#equals').click(); //Assert

    cy.get('#screenCurr').should("contain", "667");
  });
});
describe('testing the division button', function () {
  it('pressing the minus button takes away one number from the other', function () {
    //act
    cy.get('#seven').click();
    cy.get('#five').click();
    cy.get('#nil').click();
    cy.get('#divide').click();
    cy.get('#three').click();
    cy.get('#equals').click(); //Assert

    cy.get('#screenCurr').should("contain", "250");
  });
});