<div align="center">
   <img src="https://github.com/brunoeduardoferreira/cs-testes-automatizados-com-cypress-basico/blob/main/assets/cypress_logo.png"/>
</div>

# Testes Automatizados com Cypress - BΓ‘sico

## π Sobre os Testes
<p>Foi criada uma suite de testes para que pΓ‘gina de Tickets seja testada onde os campos sΓ£o preeenchidos automaticamente Γ© verificada a obrigatoriedade dos campos e tambΓ©m sΓ£o feitas validaΓ§Γ΅es quanto aos botΓ΅es e textos que sΓ£o criados dinamicamente no preenchimento do formulΓ‘rio. </p>

<br/>

## π§° Ferramentas, Frameworks e Bibliotecas 

* [Visual Studio Code](https://code.visualstudio.com/)
* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) 
* [NodeJS](https://nodejs.org/en/)
* [Cypress](https://www.cypress.io/)

<br/>

## π§ͺ Rodando os Testes 

π URL Testada : https://ticket-box.s3.eu-central-1.amazonaws.com/index.html

<div align="center" width="600px">
   <img src="https://github.com/brunoeduardoferreira/cs-testes-automatizados-com-cypress-basico/blob/main/assets/image2.png" />
</div>

### π’ Rodando os testes em Modo interativo

```bash
# Abre o Cypress em modo interativo e executa os testes
$ npx cypress open
```

<div align="center" width="600px">
   <img src="https://github.com/brunoeduardoferreira/cs-testes-automatizados-com-cypress-basico/blob/main/assets/image1.png" />
</div>

### π’ Rodando os Testes em Headless

```bash
# rodando os testes em modo headless
$ yarn test
# ou
$ npm test 

```
```bash
# Resultado do Teste em Headless 
$ yarn test
yarn run v1.22.5
$ cypress run

====================================================================================================

  (Run Starting)

  ββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββ
  β Cypress:    8.6.0                                                                              β
  β Browser:    Electron 93 (headless)                                                             β
  β Specs:      1 found (ticket.spec.js)                                                           β
  ββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββ


ββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββ

  Running:  ticket.spec.js                                                                  (1 of 1)


  Tickets
    β fills all the text input fields (4545ms)
    β select two tickets (853ms)
    β select 'vip' ticket type (659ms)
    β selects 'social media' checkbox (652ms)
    β selects 'friend', and 'publication', then uncheck 'friend' (777ms)
    β has 'TICKETBOX' headers heading (580ms)
    β alerts on invalid email (1557ms)
    β fills and reset the form (3105ms)
    β fills mandatory fields using support command (2237ms)


  9 passing (19s)


  (Results)

  ββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββ
  β Tests:        9                                                                                β
  β Passing:      9                                                                                β
  β Failing:      0                                                                                β
  β Pending:      0                                                                                β
  β Skipped:      0                                                                                β
  β Screenshots:  0                                                                                β
  β Video:        true                                                                             β
  β Duration:     18 seconds                                                                       β
  β Spec Ran:     ticket.spec.js                                                                   β
  ββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββ


  (Video)

  -  Started processing:  Compressing to 32 CRF
  -  Finished processing: D:\Repositories\GitHub\brunoeduardoferreira\cs-testes-autom    (5 seconds)
                          atizados-com-cypress-basico\cypress-basic-course\cypress\vi
                          deos\ticket.spec.js.mp4


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββ
  β β  ticket.spec.js                           00:18        9        9        -        -        - β
  ββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββ
    β  All specs passed!                        00:18        9        9        -        -        -

Done in 39.54s.
```

## π ReferΓͺncias

### π ReferΓͺncias Oficiais do Cypress
- [InstalaΓ§Γ£o do Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements)
- [InicializaΓ§Γ£o do Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress#Opening-Cypress)
- [Visitando uma URL Remota](https://docs.cypress.io/api/commands/visit#Syntax)
- [Digitando em elementos do DOM](https://docs.cypress.io/api/commands/type#Syntax)
- [Selecionando uma opΓ§Γ£o de um select](https://docs.cypress.io/api/commands/select#Syntax)
- [Marcando CheckBoxes e RadioButtons](https://docs.cypress.io/api/commands/check#Syntax)
- [Desmarcando CheckBoxes](https://docs.cypress.io/api/commands/uncheck#Syntax)
- [Assertions](https://docs.cypress.io/guides/references/assertions#Length)
- [Comandos Customizados](https://docs.cypress.io/api/cypress-api/custom-commands#Syntax)
- [Pare de usar Page Objects e comece a utilizar aΓ§Γ΅es da aplicaΓ§Γ£o](https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/)
- [Executando Testes em modo headless](https://docs.cypress.io/guides/guides/command-line#Commands)

### π ReferΓͺncia Oficial de IntegraΓ§Γ£o ContΓ­nua com GitLab 
- [ComeΓ§ando com integraΓ§Γ£o continua no GitLab](https://docs.gitlab.com/ee/ci/#getting-started)

### Curso 
- [Udemy - Curso Testes Automatizados com cypress - BΓ‘sico](https://www.udemy.com/course/testes-automatizados-com-cypress-basico/)