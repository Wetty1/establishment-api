# API Establishments

## Framework utiliazado
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest

  <p align="center">Um framework <a href="http://nodejs.org" target="blank">Node.js</a> progressivo para a construção de aplicativos do lado do servidor eficientes e escaláveis, fortemente inspirado no <a href="https://angular.io" target="blank">Angular</a>.</p>

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descrição

Projeto de desafio onde deve gerenciar estabelecimentos.

## Instalação

```bash
$ npm install
```

ou

```bash
$ yarn
```

## Running

```bash
# desenvolvimento
$ yarn start

# modo desenvolvimento
$ yarn start:dev

# produção
$ yarn start:prod
```

## Teste

```bash
# unit tests
$ yarn test

# test coverage
$ yarn test:cov
```

## Requisitos

#### Requisitos Funcionais
 - [x] Registrar Usuários
 - [x] Efetuar login
 - [x] Criar estabelecimentos
 - [ ] Listar e filtrar estabelecimentos
 - [x] Remover estabelecimentos

#### Requisitos Não Funcionais
 - [x] Deve ser usado token jwt para identificação do usuário
 - [x] Deve retornar as coordenadas a partir do endereço para que seja mostrado no mapa
 - [ ] As rotas devem ser cobertas por testes

#### Regras de Negócios
 - [ ] Usuário clientes não devem criar novos estabelecimentos
 - [ ] Usuário clientes não devem modificar estabelecimentos
 - [ ] Não deve ser criada duas contas com o mesmo login

## Redes

<img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" width="14" alt="Nest Logo" /> Linkedin - [Wesley de Sousa](https://www.linkedin.com/in/wesley-de-sousa-silva-6818a3152/)
<img src="https://www.flaticon.com/svg/static/icons/svg/2111/2111370.svg" width="14" alt="Nest Logo" /> Discord - WesleySS#2021
