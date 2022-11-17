#Comandos para instalação

## Dependecias 

npm i sequelize mysql2 express cors body-parser
npm i sequelize-cli nodemon

 -> Criar arquivo server.js ou index.js e configurar

## Sequelize

### Iniciar sequelize
npx sequelize-cli init
mkdir controller
mkdir router

 -> acesssar "config/config.json" e configurar banco para desenvolvimento (1ª)

### Criar banco
npx sequelize-cli db:create 

### Criar modelo
npx sequelize-cli model:generate --name login --attributes email:string,senha:string,token:string

### Criar migração 
npx sequelize-cli db:migration:generate --name login --attributes email:string,senha:string,token:string

### Fazer migração 
npx sequelize-cli db:migrate

### Desfazer migração 
npx sequelize-cli db:migrate:undo

### Criar sementes
npx sequelize-cli seed:generate --name login
-> Cadastrar os cadastros nas sementes

### Enviar sementes (todas)
npx sequelize-cli db:seed:all

### Remover sementes (todas)
npx sequelize-cli db:seed:undo

## Criar Controller e router
acesssar "controller" criar um controller 
acesssar "router" criar uma rota

adicionar rota a aplicação criada em server.js ou index.js