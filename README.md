# API Torque Moto Parts

---

## 🏍️ Sobre o Projeto

A **API Torque Moto Parts** é uma solução robusta e eficiente para o gerenciamento de estoque de uma loja de acessórios e peças para motocicletas. Desenvolvida para facilitar o controle de produtos, a API permite o **cadastro de novos itens**, a **edição de preços** e o **controle preciso das quantidades em estoque**. Ideal para otimizar operações e manter o inventário sempre atualizado.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias e ferramentas:

* **Linguagem de Programação:** JavaScript
* **Ambiente de Execução:** Node.js
* **Framework Web:** Express.js
* **Banco de Dados:** MongoDB
* **Estilização e Estrutura (Frontend - se aplicável, mas a API serve o backend):**

---

## ⚙️ Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

* **Node.js:** Versão 14 ou superior.
* **npm** (Node Package Manager) ou **Yarn:** Vêm junto com a instalação do Node.js.
* **MongoDB:** Servidor MongoDB rodando localmente ou acesso a um cluster remoto (como o MongoDB Atlas).

---

## 📦 Instalação

Siga os passos abaixo para configurar e rodar a API em seu ambiente local:

1.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/Erickmra1/API-TorqueMotoParts.git](https://github.com/Erickmra1/API-TorqueMotoParts.git)
    ```
2.  **Acesse a Pasta do Projeto:**
    ```bash
    cd API-TorqueMotoParts
    ```
3.  **Instale as Dependências:**
    ```bash
    npm install
    ```
    Este comando instalará todas as bibliotecas e módulos necessários para o funcionamento da API.

---

## ▶️ Como Rodar a API

Para iniciar o servidor da API após a instalação:

1.  Certifique-se de que o **servidor MongoDB esteja em execução**.
2.  No terminal, na pasta raiz do projeto, execute:
    ```bash
    npm start
    ```
    A API estará disponível localmente em `http://localhost:3000` (ou a porta que você configurou).


---

## 📋 Endpoints da API

A API Torque Moto Parts oferece as seguintes rotas principais para gerenciamento de produtos. A URL base é `http://localhost:3000` (ou a porta configurada).

### 1. **Cadastrar Novo Produto**

* **Rota:** `/products`
* **Método:** `POST`
* **Descrição:** Adiciona um novo produto ao estoque.
* **Corpo da Requisição (JSON):**
    ```json
    {
        "nome": "Capacete Helt Race",
        "descricao": "Capacete integral para motociclistas, cor preta, tamanho M",
        "preco": 350.00,
        "quantidade": 20,
        "categoria": "Capacetes"
    }
    ```
* **Exemplo de Resposta (JSON - Sucesso):**
    ```json
    {
        "mensagem": "Produto cadastrado com sucesso!",
        "produto": {
            "_id": "60d0fe4f5f1c2d0015b7b9a1",
            "nome": "Capacete Helt Race",
            "descricao": "Capacete integral para motociclistas, cor preta, tamanho M",
            "preco": 350,
            "quantidade": 20,
            "categoria": "Capacetes",
            "__v": 0
        }
    }
    ```

### 2. **Listar Todos os Produtos**

* **Rota:** `/products`
* **Método:** `GET`
* **Descrição:** Retorna uma lista de todos os produtos cadastrados no estoque.
* **Exemplo de Resposta (JSON):**
    ```json
    [
        {
            "_id": "60d0fe4f5f1c2d0015b7b9a1",
            "nome": "Capacete Helt Race",
            "descricao": "Capacete integral para motociclistas, cor preta, tamanho M",
            "preco": 350,
            "quantidade": 20,
            "categoria": "Capacetes",
            "__v": 0
        },
        {
            "_id": "60d0fe4f5f1c2d0015b7b9a2",
            "nome": "Luva X11 Black",
            "descricao": "Luva de couro preta, proteção extra",
            "preco": 90,
            "quantidade": 50,
            "categoria": "Luvas",
            "__v": 0
        }
    ]
    ```

### 3. **Atualizar Dados de um Produto**

* **Rota:** `/products/:id` (onde `:id` é o ID do produto)
* **Método:** `PUT`
* **Descrição:** Atualiza as informações de um produto específico.
* **Corpo da Requisição (JSON - exemplo para alterar preço e quantidade):**
    ```json
    {
        "preco": 320.00,
        "quantidade": 18
    }
    ```
* **Exemplo de Resposta (JSON - Sucesso):**
    ```json
    {
        "mensagem": "Produto atualizado com sucesso!",
        "produto": {
            "_id": "60d0fe4f5f1c2d0015b7b9a1",
            "nome": "Capacete Helt Race",
            "descricao": "Capacete integral para motociclistas, cor preta, tamanho M",
            "preco": 320,
            "quantidade": 18,
            "categoria": "Capacetes",
            "__v": 0
        }
    }
    ```

### 4. **Deletar um Produto**

* **Rota:** `/products/:id` (onde `:id` é o ID do produto)
* **Método:** `DELETE`
* **Descrição:** Remove um produto do estoque.
* **Exemplo de Resposta (JSON - Sucesso):**
    ```json
    {
        "mensagem": "Produto deletado com sucesso!"
    }
    ```

---

## 🤝 Contribuição

Contribuições são bem-vindas! Se você tiver ideias para melhorias ou encontrar bugs, por favor, abra uma issue ou envie um pull request.

---

## 📧 Contato

Para dúvidas ou sugestões, entre em contato:

* **Erick Moreira:** [www.linkedin.com/in/erick-moreira-4147a12ba](www.linkedin.com/in/erick-moreira-4147a12ba)

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes. (Se você ainda não tem um arquivo LICENSE, pode criar um simples ou remover esta seção.)
