# Documentação | Projeto Conta Bancária

_[M1S04] Ex 0 - Roteiro de projeto [Conta bancária]_
>Olá Dev(a)! Parabéns, você acaba de ser contratado e seu projeto de onboard será o desenvolvimento de um sistema de conta bancária para pessoa física.

Nessa primeira versão será contemplado: <br>
_Cadastro de clientes_ <br>
_Depósitos_ <br>
_Saques_ <br>
_Consulta de saldo_

__________________________

_[M1S04] Ex 1 - Criação do projeto [Conta bancária]_
> Um bom projeto precisa de uma boa arquitetura, nessa tarefa devem ser criados os arquivos básicos e desenvolvido a documentação.

[x] Criar um novo projeto adicionando os arquivos básicos (html, css e js) <br>
[x] Linkar os arquivos criados (adicionar o script e o link do css no html) <br>
[x] Criar um readme.md e documentar ele. <br>
[x] Criar o repositório no github <br>
[x] Enviar essas primeiras configurações para o repositório remoto criado (commit, push)

__________________________

_[M1S04] Ex 2 - Criação do layout básico da página [Conta bancária]_
> Nessa tarefa deve ser criado o layout básico da página, fique livre para criar como achar melhor, escolha as cores para compor o layout e divirta-se!

[X] Implementar um header com a logo e nome da aplicação e o que mais achar necessário <br>
[x] Implementar um footer com os dados da empresa e o que mais achar interessante

__________________________

_[M1S04] Ex 3 - Criação do formulário de cadastro - Interface visual [Conta bancária]_
>Nessa tarefa deve ser criada apenas a parte visual do formulário de cadastro.

[x] Criar um formulário contendo os seguintes campos: <br>
[x] Nome <br>
[x] CPF <br>
[x] Celular <br>
[x] Senha <br>
[x] Confirmação da senha <br>
[x] Botão para enviar o formulário <br>
[x] Botão para limpar o formulário

__________________________

_[M1S04] Ex 4 - Criação do formulário de cadastro - Funcionalidades [Conta bancária]_
>Nessa tarefa devem ser adicionadas funcionalidades ao formulário criado na tarefa anterior.

[x] Criar uma função para salvar os dados do formulário em um array <br>
[x] Criar validações para ver se os campos foram preenchidos e as senhas conferem <br>
[x] Criar uma variável iniciando com um array vazio no início do script para armazenar as contas dos clientes em tempo de execução. <br>
[x] Deve ser gerado um número unico para cada conta. Dica: new Date().getTime() <br>
[x] No final o objeto armazenado deve possuir uma estrutura similar a essa: <br><br>
<code>
{ <br>
nome: 'Marina Lua', <br>
cpf: '999.999.999.99', <br>
celular: '(99) 99999-9999', <br>
senha: '123', <br>
conta: 1674333795439, <br>
saldo: 0, <br>
} 
</code> <br>

[x] Se der tudo certo com a criação da conta, exiba a mensagem de conta criada com sucesso e o número da conta criada. (Pode ser utilizado alert ou criar um elemento html na tela) <br>

[x] Se der erro exiba uma mensagem de erro ao usuário. (Pode ser utilizado alert ou criar um elemento html na tela)

__________________________

_[M1S04] Ex 5 - Operações - Interface visual [Conta bancária]_
> Nessa tarefa deve ser criada apenas a intervace visual para as operações e desabilitar o campo de valor quando a operação for consulta saldo

[x] Adicionar um formulário com os seguintes campos <br>
- Conta <br>
- Operação (Saque, Depósito ou Consulta saldo) <br>
- Valor <br>
- Senha <br>
- Botão para confirmar <br>
- Botão para limpar <br>

[x] Se a opção selecionada for consultar saldo deve ser desabilitado o campo de valor

__________________________

_[M1S04] Ex 6 - Operações - Eventos [Conta bancária]_
> Nessa tarefa será adicionado os eventos ao formulário criado.

[x] Criar 3 funções por enquanto sem nada dentro, uma para cada operação (saque, depósito e consultar saldo) <br> <br>
[x] Adicionar um evento ao submit do formulário criado anteriormente para executar uma função que deve:
- Validar se a conta existe e a senha está correta
- Verificar qual é a operação selecionada
Chamar a função correspondente à operação

__________________________

_[M1S04] Ex 7 - Operações - Consulta Saldo [Conta bancária]_
> Nessa tarefa será iniciado o desenvolvimento das operações

[x] Codificar a função para consulta do saldo criada anteriormente <br>
- Deve receber como parâmetro a conta
- Deve implementar a funcionalidade para obter o saldo
- Deve exibir uma mensagem com o saldo atual da conta (elemento html ou alert)

__________________________

_[M1S04] Ex 8 - Operações - Depósito [Conta bancária]_
> Nessa tarefa será implementado a função de depósito

[x] Codificar a função para depósito criada anteriormente <br>
- Deve receber como parâmetro a conta e o valor
- Deve ser validado se o valor recebido é maior que zero
- Deve implementar a funcionalidade para incrementar o saldo da conta
- Deve exibir uma mensagem com a informação de depósito efetuado com sucesso e o novo saldo atual da conta (elemento html ou alert)

__________________________

_[M1S04] Ex 9 - Operações - Saque [Conta bancária]_
> Nessa tarefa será implementada a funcionalidade de saque

[x] Codificar a função para saque criada anteriormente
- Deve receber como parâmetro a conta e o valor
- Deve ser validado se o valor recebido é maior que zero
- Deve validar se a conta tem saldo suficiente <br>
- Caso não tenha saldo suficiente deve ser exibido a mensagem para o usuário que não foi possível efetuar o saque e o saldo atual <br><br>

[x] O saque não pode ser realizado caso a conta não possua saldo suficiente
Deve implementar a funcionalidade para decrementar o saldo da conta
Deve exibir uma mensagem com a informação de saque efetuado com sucesso e o novo saldo atual da conta

