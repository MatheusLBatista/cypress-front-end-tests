/** eslint-disable */
/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

describe("Formulário de cadastro", () => {

    beforeEach(()=> {
        cy.visit('/');
        cy.getByData("botao-login").click();
    })

    it("Deve realizar login com sucesso", () => {
        cy.getByData('email-input').type('neilton@alura.com');
        cy.getByData('senha-input').type('123456');
        cy.getByData('botao-enviar').click();
        cy.location('pathname').should('eq', '/home')
        cy.contains("p", 'Olá, Neilton Seguins').should('be.visible')
    })

    it("Não deve permitir um email inválido", () => {
        
    })

    it("Não deve permitir um email em branco", () => {

    })

    it("Deve informar um erro ao tentar logar caso senha ou email estejam errados", () => {

    })
})