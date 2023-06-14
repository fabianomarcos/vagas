# Comandos

# npm run server 
Utilizei o server.json para simular um banco de dados. Com isso utilizei das requisições dele para o crud, ao invés de utilizar a memória
# npm run dev

## Utilização

## teste1.js

Todos os itens abaixo são exemplos, mas você pode realizar o teste que entender melhor.

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

Chamar a rota put http://localhost:3333/users?id=id_que_se_encontra_no_arquivo_db.json, com o body abaixo:
{
	"name": "Fabiano"
}

## teste5.js
Chamar a rota get http://localhost:3333/users/access com o body abaixo:
{
	"name": "Fabianinho"
}

Fiquei na dúvida se entendi esse teste corretamente, fiz de um jeito que ele busca todos os usuário com a string enviada no name, exemplo an retornaria Ana, Fabiano, Anbrosio.

## teste 6

Para logar chamar rota post http://localhost:3333/sessions com o body abaixo:
{
	"name": "Fabiano"
}
Não é possivel logar sem estar cadastrado como usuário
Será retornado um token, que deve ser colado no Auth Bearer token das requisições de put e delete
