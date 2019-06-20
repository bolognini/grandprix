# Grandprix

> Desafio proposto

Criar uma aplicação que consuma uma API, filtre os dados e mostre os resultados obtidos. A aplicação poderia utilizar qualquer framework ou biblioteca. A API em questão traz o resultado de corridas de Fórmula 1 e a aplicação deve filtrar os dados pelo ano e etapa da corrida, além de ordernar o resultado pela posição dos pilotos no resultado da corrida. Por fim, a aplicação deve possuir um tratamento em caso de erro na requisição.

A aplicação pode ser acessada em ambiente de produção em: [https://grandprix.netlify.com/](https://grandprix.netlify.com/).


# Instalação

Para instalar todas as dependências do projeto, execute o seguinte comando:

```
npm install
```

# Desenvolvimento

O projeto foi desenvolvido em **React** com a utilização do **Next.Js** como boilerplate. Em relação ao desenvolvimento do CSS, foi utilizada a biblioteca **Styled-Components**. Durante o processo, o projeto foi testado nos browsers Chrome e FireFox Nightly.

## Pré-requisitos

node: versão 11 ou superior

npm: versão 6 ou superior

## Rodando a aplicação

Para rodar a aplicação em ambiente de desenvolvimento, execute os comandos:

```
git clone https://github.com/bolognini/grandprix.git
cd grandprix
npm install
npm run dev
```

# API

A aplicação realiza um método GET no endereço da [API](http://ergast.com/api/f1/${year}/${round}/results.json) fornecida pelo desafio

# Deploy

O CI/CD e deploy foram realizados através da plataforma Netlify.