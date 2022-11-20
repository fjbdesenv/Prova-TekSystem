<h1 align="center"> Prova - TekSystem </h1>

## Aplicação desenvolvida de acordo com alguns critérios pedidos na prova web, na empresa Tek-System Informática LTDA.

## 🔨 Funcionalidades do projeto

- `Cadastro de Transações`: Posssibilita o cadastro de tranasções (operaçoes financeiras), podendo fazer o cadastro, edição, exclusão e consulta. 
- `Cadastro de Categória`: Posssibilita o cadastro de categorias (classificação para trasação), podendo fazer o cadastro, edição, exclusão e consulta. 
- `Consulta saldo no mês`: Possibilita a consulta (da totalização) de todas as operaçoes realizadas em um determinado mês (filtro).
- `Consulta saldo no ano`: Possibilita a consulta (da totalização) de todas as operaçoes realizadas no ano (filtro).
- `Consulta valor`: Possibilita a consulta entre um valor minimo e maximo para transação (filtro).

## 📁 Acesso ao projeto

A codifição do projeto se encontra disponível em https://github.com/fjbdesenv/Prova-TekSystem.

## 🛠️ Projeto


Imagem do projeto mostrando a tela de categoria onde podemos cadastrar, editar, excluir e visualizar as categorias já cadastradas.
<p>
  <img width="500px" heigth="500px" alt="Imagem do projeto" src="https://i.postimg.cc/ZqsWFJ0D/categoria.png"/>
</p>

Imagem do projeto capturada apos exclusão de uma categoria.
<p>
  <img width="500px" heigth="500px" alt="Imagem do projeto" src="https://i.postimg.cc/rwFyhv66/categoria-exclus-o.png"/>
</p>

Imagem da tela inicial do projeto, ondem podemos filtras as transaçoes cadastradas.
<p>
  <img width="500px" heigth="500px" alt="Imagem do projeto" src="https://i.postimg.cc/g281Tdwr/Inicio.png"/>
</p>

### 🔧 Executar na sua máquina:

### Preparativos

necessario instalar `git`, `node`, `MySql`:
Executar o comando no terminal

`git clone https://github.com/fjbdesenv/Prova-TekSystem.git`

### Instalação de BackEnd

1. `cd Prova-TekSystem/server`
2. `npm i`
3. Acessar a pasta Config e no arquivo config.json configurar a conexao com o banco de dados (para development).
4. `npx sequelize-cli db:create`
5. `npx sequelize-cli db:migrate`
6. `npx sequelize-cli db:seed:all`

### Instalação de FrontEnd

1. `cd Prova-TekSystem/client`
2. `npm i`
3. Acessar http://localhost:3000/ para vilualizar o projeto.

## 👀 Tecnologias utilizadas

![HTML](https://img.shields.io/badge/HTML-E34F26.svg?logo=html5&logoColor=white)
![css](https://img.shields.io/badge/CSS-1572B6.svg?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?logo=javascript&logoColor=black)
![Node](https://img.shields.io/badge/node-B0E0E6.svg?logo=node.js&logoColor=black)
![Vue](https://img.shields.io/badge/vue-8B008B.svg?logo=vue.js&logoColor=black)

## ✏️ Autores

| [<img src="https://avatars.githubusercontent.com/u/110018406?v=4" width=115><br><sub>Fábio Júnior Barbosa</sub>](https://github.com/fjbdesenv) |
| :---: |

<p align="center">
  <img alt="Imagem de status do projeto" src="https://img.shields.io/static/v1?label=STATUS&message=DESENVOLVIMENTO&color=yellow&style=for-the-badge"/>
</p>

[![GitHub issues](https://img.shields.io/github/issues/fjbdesenv/Prova-TekSystem)](https://github.com/fjbdesenv/Prova-TekSystem/issues)
[![GitHub forks](https://img.shields.io/github/forks/fjbdesenv/Prova-TekSystem)](https://github.com/fjbdesenv/Prova-TekSystem/network)
[![GitHub stars](https://img.shields.io/github/stars/fjbdesenv/Prova-TekSystem)](https://github.com/fjbdesenv/Prova-TekSystem/stargazers)
[![GitHub license](https://img.shields.io/github/license/fjbdesenv/Prova-TekSystem)](https://github.com/fjbdesenv/Prova-TekSystem/blob/main/LICENSE)
