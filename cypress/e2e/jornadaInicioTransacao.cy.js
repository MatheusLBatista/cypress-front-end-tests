/** eslint-disable */
/// <reference types="cypress" />

describe("Jornada transação", () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('neilton@alura.com', '123456');
        cy.url().should('eq', 'http://localhost:3000/home')
    })

    it("Deve fazer login e criar uma transação de entrada", () => {
        cy.transacao('Transferência', '100');
        cy.getByData('lista-transacoes').find('li').last().contains('- R$ 100');
    })

    it("Deve permitir que a pessoa usuária acesse a aplicação, realize um depósito e faça um logout", () => {
        cy.transacao('Depósito', '500');
        cy.getByData('lista-transacoes').find('li').last().contains('R$ 500');
        cy.logout();
        cy.location('pathname').should('eq', '/')
    })

    it("Deve realizar operações de transação e depósito confirmando o saldo após cada operação", () => {

    })
})
