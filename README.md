<div align="center">
   <img src="https://github.com/brunoeduardoferreira/cs-testes-automatizados-com-cypress-basico/blob/main/assets/cypress_logo.png"/>
</div>

# Testes Automatizados com Cypress - Básico



## 🧰 Ferramentas, Frameworks e Bibliotecas 

* [Visual Studio Code]()
* [JavaScript]() 
* [NodeJS]()
* [Cypress]()


## Rodando os Testes 

### 🟢 Rodando os testes em Modo interativo

```bash
# Abre o Cypress em modo interativo e executa os testes
$ npx cypress open

```

<div align="center" width="600px">

   <img src="https://github.com/brunoeduardoferreira/cs-testes-automatizados-com-cypress-basico/blob/main/assets/image1.png" />

</div>


### 🟢 Rodando os Testes em Headless

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

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    8.6.0                                                                              │
  │ Browser:    Electron 93 (headless)                                                             │
  │ Specs:      1 found (ticket.spec.js)                                                           │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────

  Running:  ticket.spec.js                                                                  (1 of 1)


  Tickets
    √ fills all the text input fields (4545ms)
    √ select two tickets (853ms)
    √ select 'vip' ticket type (659ms)
    √ selects 'social media' checkbox (652ms)
    √ selects 'friend', and 'publication', then uncheck 'friend' (777ms)
    √ has 'TICKETBOX' headers heading (580ms)
    √ alerts on invalid email (1557ms)
    √ fills and reset the form (3105ms)
    √ fills mandatory fields using support command (2237ms)


  9 passing (19s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        9                                                                                │
  │ Passing:      9                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     18 seconds                                                                       │
  │ Spec Ran:     ticket.spec.js                                                                   │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF
  -  Finished processing: D:\Repositories\GitHub\brunoeduardoferreira\cs-testes-autom    (5 seconds)
                          atizados-com-cypress-basico\cypress-basic-course\cypress\vi
                          deos\ticket.spec.js.mp4


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ √  ticket.spec.js                           00:18        9        9        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    √  All specs passed!                        00:18        9        9        -        -        -

Done in 39.54s.
```


## 🚀 Sobre os Testes




## 🧪 Testes Executados 

🌐 URL Testada : https://ticket-box.s3.eu-central-1.amazonaws.com/index.html

| Status | Objects     | it                                                        | Description                                                                      |
| ------ | ----------- | --------------------------------------------------------- | -------------------------------------------------------------------------------- |
| ✔️      | Inputs      | fills all the text input fields                           | Preenche todos os Campos de Input                                                |
| ✔️      | Select      | select two tickets                                        | Seleciona o valor 2 no campo Select                                              |
| ✔️      | RadioButton | select 'vip' ticket type                                  | Seleciona o valor vip no campo RadioButton                                       |
| ✔️      | CheckBox    | selects 'social media' checkbox                           | Seleciona o checkbox social media                                                |
| ✔️      | CheckBox    | selects 'friend', and 'publication', then uncheck 'friend | Seleciona os checkboxes friend e publication e tira a seleção do ckeckbox friend |
| ✔️      | header h1   | has 'TICKETBOX' header's heading                          | Faz uma verificação no Header > h1 para ver se está escrito TICKETBOX            |
| ❌      |             |                                                           |                                                                                  |
| ❌      |             |                                                           |                                                                                  |
| ❌      |             |                                                           |                                                                                  |
| ❌      |             |                                                           |                                                                                  |
| ❌      |             |                                                           |                                                                                  |
| ❌      |             |                                                           |                                                                                  |
| ❌      |             |                                                           |                                                                                  |
| ❌      |             |                                                           |                                                                                  |

## 🔗 Referências

### 🔗 Referências Oficiais do Cypress
- [Instalação do Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements)
- [Inicialização do Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress#Opening-Cypress)
- [Visitando uma URL Remota](https://docs.cypress.io/api/commands/visit#Syntax)
- [Digitando em elementos do DOM](https://docs.cypress.io/api/commands/type#Syntax)
- [Selecionando uma opção de um select](https://docs.cypress.io/api/commands/select#Syntax)
- [Marcando CheckBoxes e RadioButtons](https://docs.cypress.io/api/commands/check#Syntax)
- [Desmarcando CheckBoxes](https://docs.cypress.io/api/commands/uncheck#Syntax)
- [Assertions](https://docs.cypress.io/guides/references/assertions#Length)
- [Comandos Customizados](https://docs.cypress.io/api/cypress-api/custom-commands#Syntax)
- [Pare de usar Page Objects e comece a utilizar ações da aplicação](https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/)
- [Executando Testes em modo headless](https://docs.cypress.io/guides/guides/command-line#Commands)

### 🔗 Referência Oficial de Integração Contínua com GitLab 
- [Começando com integração continua no GitLab](https://docs.gitlab.com/ee/ci/#getting-started)