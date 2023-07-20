# beyond-onboarding
## Como rodar
1. Faça um clone desse repositório;
2. Entre na pasta `backend-challenge`;
3. Rode `yarn` para instalar as dependências;
4. Altere as credencias do seu banco de dados dentro de `/src/config/database.js`;
      - 4.1 não se esqueça de escolher um dbms compatível com o sequelize e de instalar a sua respectiva biblioteca!
6. Rode `yarn sequelize db:create` para criar o banco de dados;
7. Rode `yarn sequelize db:migrate` para executar as migrations;
8. Rode `yarn dev` para iniciar o servidor.
9. Importe o arquivo `Insomnia_2023-07-20.json` desse repositório no Insomnia;
