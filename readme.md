# Comandos

# npm run server 
Utilizei o server.json para simular um banco de dados. Com isso utilizei das requisições dele para o crud, ao invés de utilizar a memória
# npm run dev

## Utilização

## teste1.js

GET em /user 

Chamar no insominia a rota get http://localhost:3333/users

## teste2.js

Chamar no insominia a rota post http://localhost:3333/users com o body abaixo
{
	"job": "Developer",
	"name": "Fabiano"
}

Não é possível criar usuários com nomes identicos

## teste3.js

Chamar no insominia a rota delete http://localhost:3333/users?name=nome_para_deletar
Não será possível deletar sem estar com o token, olhar procedimento no teste 6

Não é possivel deletar usuário não existente

## teste4.js

Atualiza os dados de um usuário especifico.

## teste5.js

Retorne quantas vezes determinado usuário foi lido no teste1.

## teste 6

Definina uma forma de criar permissão para o usuario, defina se o usuário pode deletar ou atualizar usuários. Crie um middleware para validar essas permissões e adicione no teste4 e teste3.

