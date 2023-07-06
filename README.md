## Projeto Express com MongoDB

Este é um projeto básico de um aplicativo Node.js usando o framework Express e o banco de dados MongoDB. O objetivo deste projeto é fornecer um exemplo de configuração e estruturação de um aplicativo Express com integração ao MongoDB usando a biblioteca Mongoose.

### Funcionalidades

- Registro de usuários: Permite que novos usuários se registrem fornecendo nome, sobrenome, email e senha. Os dados são armazenados no banco de dados MongoDB.
- Autenticação de usuários: Permite que os usuários façam login com seus emails e senhas registrados. É gerado um token de autenticação usando JWT (JSON Web Token).
- Proteção de rotas: Algumas rotas são protegidas e requerem autenticação por meio do token gerado durante o login. Um middleware é usado para verificar a presença e validade do token antes de permitir o acesso às rotas protegidas.

### Requisitos

Certifique-se de ter os seguintes requisitos instalados em sua máquina:

- Node.js
- MongoDB
- Gerenciador de pacotes npm ou Yarn

### Instalação

1. Clone este repositório para o seu ambiente local.
2. Navegue até o diretório raiz do projeto.
3. Execute o seguinte comando no terminal para instalar as dependências:

   ```shell
   npm install
   ```

   ou

   ```shell
   yarn install
   ```

4. Crie um arquivo `.env` no diretório raiz do projeto e defina as seguintes variáveis de ambiente:

   ```dotenv
   URL_DB=URL_DO_SEU_BANCO_DE_DADOS_MONGODB
   SECRET_KEY=CHAVE_SECRETA_PARA_GERACAO_DO_TOKEN_JWT
   ```

   Substitua `URL_DO_SEU_BANCO_DE_DADOS_MONGODB` pela URL de conexão do seu banco de dados MongoDB e `CHAVE_SECRETA_PARA_GERACAO_DO_TOKEN_JWT` por uma chave secreta de sua escolha para a geração do token JWT.

5. Inicie o servidor executando o seguinte comando no terminal:

   ```shell
   npm start
   ```

   ou

   ```shell
   yarn start
   ```

6. O servidor Express estará sendo executado na porta 3000. Acesse `http://localhost:3000` no seu navegador para testar as rotas disponíveis.

### Rotas

O aplicativo possui as seguintes rotas disponíveis:

- `POST /register`: Rota para registrar um novo usuário. Os campos necessários (nome, sobrenome, email e senha) devem ser fornecidos no corpo da requisição.
- `POST /login`: Rota para fazer login. O email e a senha devem ser fornecidos no corpo da requisição. Após o login bem-sucedido, um token de autenticação é retornado no cabeçalho da resposta.
- `GET /dashboard`: Rota protegida que requer autenticação. Somente usuários autenticados com o token válido podem acessá-la.
- `GET /users`: Rota protegida que retorna todos os usuários registrados. Também requer autenticação.

### Estrutura do Projeto

O projeto possui a seguinte estrutura de diretórios:

- `routes`: Contém os arquivos de definição das rotas do aplicativo.
- `models`: Contém os arquivos de definição dos modelos

dos dados do MongoDB usando o Mongoose.
- `controllers`: Contém os arquivos que implementam as funções de controle das rotas, como registro de usuário, autenticação e manipulação dos dados.
- `middleware`: Contém os arquivos de middleware, como autenticação e proteção de rotas.
- `config`: Contém os arquivos de configuração, como conexão com o banco de dados e definição de variáveis de ambiente.

### Considerações Finais

Este projeto é apenas um exemplo básico de um aplicativo Express com integração ao MongoDB usando o Mongoose. É importante lembrar de adaptar o código de acordo com as necessidades e requisitos específicos do seu projeto.

Certifique-se de entender os conceitos de segurança ao lidar com autenticação e proteção de rotas. Você pode melhorar e adicionar recursos adicionais ao projeto, como validação de dados, controle de acesso mais granular, entre outros.

Sinta-se à vontade para explorar e expandir este projeto de acordo com as suas necessidades. Se necessário, consulte a documentação do Express, do Mongoose e do MongoDB para obter mais informações sobre suas funcionalidades e recursos.

Divirta-se codificando!