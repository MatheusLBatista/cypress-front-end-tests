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
        // cy.getByData('email-input').type('teste@.com');
        // cy.getByData('senha-input').type('123456');
        // cy.getByData('botao-enviar').click();
        // cy.contains("alert").should('be.visible')
    })

    it("Não deve permitir um email em branco", () => {
        cy.getByData('email-input').type('     ');
        cy.getByData('senha-input').type('123456');
        cy.getByData('botao-enviar').click();
        cy.contains("span", 'O campo email é obrigatório').should('be.visible')
    })

    it("Deve informar um erro ao tentar logar caso senha ou email estejam errados", () => {
        cy.getByData('email-input').type('testando@gmail.com');
        cy.getByData('senha-input').type('123456');
        cy.getByData('botao-enviar').click();
        cy.contains("span", 'E-mail ou senha incorretos')
    })
})