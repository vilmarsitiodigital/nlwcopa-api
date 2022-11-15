<h1 align="center">
  <img alt="NlwCopa" src="https://res.cloudinary.com/vilmarbatista/image/upload/v1668543830/Development/NlwCopa/nlw-copa_pwsxpm.png" width="100%" />
</h1>

<h3 align="center">
  Fastify Application for NlwCopa project
</h3>

<p align="center">Create your own cup pool and share it with friends!</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/vilmarsitiodigital/nlwcopa-api?color=%23149e57">

  <a href="https://www.linkedin.com/in/vilmarbatista/" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-vilmar-149e57">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/vilmarsitiodigital/nlwcopa-api?color=%23149e57">

  <a href="https://github.com/vilmarsitiodigital/nlwcopa-api/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/vilmarsitiodigital/nlwcopa-api?color=%23149e57">
  </a>

  <a href="https://github.com/vilmarsitiodigital/nlwcopa-api/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/vilmarsitiodigital/nlwcopa-api?color=%23149e57">
  </a>

  <a href="https://github.com/vilmarsitiodigital/nlwcopa-api/blob/main/LICENSE">
    <img alt="GitHub" src="https://img.shields.io/github/license/vilmarsitiodigital/nlwcopa-api?color=%23149e57">
  </a>
</p>

<p align="center">
  <a href="#%EF%B8%8F-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<p id="insomniaButton" align="center">
  <a href="https://insomnia.rest/run/?label=GoBarber%20-%20VilmarBatistaf&uri=https%3A%2F%2Fgithub.com%2Fvilmarsitiodigital%2Fnlwcopa-api%2Fblob%2Fmain%2FInsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

## 💇🏻‍♂️ About the project

This API provides everything needed to organize pools among your friends.

Players can choose the best guess between games.

Providers can see all their pools, view the games, participants and predictions.

To see the **web client**, click here: [NlwCopa Web](https://github.com/vilmarsitiodigital/nlwcopa-web)<br />
To see the **mobile client**, click here: [NlwCopa Mobile](https://github.com/vilmarsitiodigital/nlwcopa-mobile)

## 🚀 Technologies

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Fastify](https://www.fastify.io/)
- [Sqllite](https://www.sqlite.org/)
- [Prisma](https://www.prisma.io/)
- [Short Unique Id](https://shortunique.id/)
- [Zod](https://zod.dev/)

## 💻 Getting started

Import the `Insomnia.json` on Insomnia App or click on [Run in Insomnia](#insomniaButton) button

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Npm](https://www.npmjs.com/)

**Clone the project and access the folder**

```bash
$ git clone https://github.com/vilmarsitiodigital/nlwcopa-api.git && cd nlwcopa-api
```

**Follow the steps below**

```bash
# Install the dependencies
$ npm i

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
# The aws variables do not need to be filled for dev environment
$ cp .env.example .env

# Once the services are running, run the migrations
$ npx prisma migrate dev

# To finish, run the api service
$ npm run dev

# Well done, project is started!
```

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork vilmarsitiodigital/nlwcopa-api
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd nlwcopa-api

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'Feature: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💚 by Vilmar Batista 🤝 [See my linkedin](https://www.linkedin.com/in/vilmarbatista/)
