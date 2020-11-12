# Elas Codam 👩‍💻

O objetivo desse projeto é criar uma plataforma para o coletivo <elasCodam> [...]


  >**Deseja participar?**:
  Caso tenha interesse em saber mais ou participar do coletivo entre em contato por codamelas@gmail.com

## Setup inicial ⚙️
1. Clone o repositório em sua máquina.

2. Rode npm install para instalar as dependências. 

## Padrão de branches e commits
### Nome das branches
  O fluxo de desenvolvimento deve seguir o padrão [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/), então uma nova branch deve sempre derivar de `elas-codam/develop`. O padrão de nome de branches deve ser como abaixo:
  
  `elas-codam/<FEAT | FIX | DOC ... >/<task-numero da task>`
  
  **Ex:**
  - Adicionar a navbar:
  
    - `git checkout elas-codam/develop`
    - `git pull`
    - `git checkout -b elas-codam/feat/task-2`

## Padrão de pastas e arquivos

```
├── frontend
├── src 
│    └── assets (arquivos estáticos: imagens, animações)
│    └── components (componentes que serão compartilhados por diferentes páginas)
│           └── Header
│                  └── Header.jsx
│                  └── styles.js
│           └── index.js (exportar todos juntos de uma vez)
│    └── pages (páginas)
│           └── Home
│                 └── Home.jsx
│                 └── styles.js
│           └── AboutUs
│                 └── AboutUs.jsx
│                 └── styles.js
│          └── index.js (exportar todos juntos de uma vez)
│    └── store (arquivos relacionados com redux, context, hooks)
│    └── services (arquivos de chamadas de api)
├── index.js
├── routes.js (arquivo que centraliza todas as rotas)
```
[📹 Exemplo](https://www.youtube.com/watch?v=X2RKRKdqqwM&t=475s&ab_channel=Rocketseat)

## Pull Requests

Ao criar um novo PR lembre-se sempre de apontar para a branch `elas-codam/develop`
<img src="" width="50%"
  alt="exemplo" />

## Links importantes

[🎨️ Figma](https://www.figma.com/file/lRqtIDmLCE8yFretGllL30/ElasCodam?node-id=0%3A1)

[📌 Asana](https://app.asana.com/0/1199088101620917/board)

