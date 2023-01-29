// Criar variável para armazenar lista de contas
let contas = [
    {
        nome: 'Marina Lua',
        cpf: '999.999.999.99',
        celular: '(99) 99999-9999',
        senha: '123',
        conta: 1674333795439,
        saldo: 100,
      },
];


// Obter formulário para adicionar evento
const formulario = document.getElementById('formulario')

// Criar função para ser executada no envio do formulário
const enviarFormulario = (event) => {
    // Evitar comportamento padrão do evento submit do formulário
    event.preventDefault()

    // Obter os campos de senha para validar se são iguais
    const senha = event.target.senha.value
    const confirmacaoSenha = event.target.confirmacaoSenha.value

    if(senha !== confirmacaoSenha) {
        alert('Senhas não conferem!')
        return
    }

    // Adicionar a conta no array

    const nome = event.target.nome.value
    const cpf = event.target.cpf.value
    const celular = event.target.celular.value
    const conta = new Date().getTime()
    const saldo = 0

    // Cria objeto
    const contaCriada = {
        conta,
        nome,
        cpf,
        celular,
        senha,
        saldo,
    };

    // Adiciona conta no array
    contas.push(contaCriada);
    // Exibe informação ao usuário
    alert(`Conta criada com sucesso. Número: ${conta}`)
}

// Vincular função ao evento de submit do formulário
formulario.addEventListener('submit', enviarFormulario);



// ----------------SEPARAR FORMULÁRIOS-----------

// Operações
// Obter formulário de operações
const formOperacao = document.getElementById('form-operacao')

// Função de saque
const sacar = (conta, valor) => {
    // Verifica se o valor é maior que 0
    if (valor > 0) {
        // Verifica se tem saldo disponível 
    if (conta.saldo >= valor) {
        const novoSaldo = conta.saldo - valor;
        conta.saldo = novoSaldo;

        alert (`Saque efetuado com sucesso! Novo saldo: ${novoSaldo}`);
        return;
    }
    alert ('Saldo insuficiente')
    return;
    }

    alert('Não foi possível efetuar o saque.')
}

// Função Depósito
const depositar = (conta, valor) => {
    if (valor > 0) {
        const novoSaldo = conta.saldo + valor;
        conta.saldo = novoSaldo;

        alert(`Depósito efetuado com sucesso! Novo saldo: ${novoSaldo}`);
        return
    }
    alert('Não foi possível efetuar o depósito')
}

// Função Consular Saldo
const consultarSaldo = (conta) => {
    alert(`Saldo atual ${conta.saldo}`)
}

// Enviar formulário de operação
const enviarFormularioOperacao = (event) =>{
    event.preventDefault()

    // Obter valores digitados no formulário
    const conta = parseInt(event.target.conta.value)
    const operacao = event.target.operacao.value
    const valor = parseFloat(event.target.valor.value)
    const senha = event.target.senhaOperacao.value

    // Obter conta
    const contaAtual = contas.find((elemento) => elemento.conta === conta)

    // Valida se a conta existe
    if(!contaAtual) {
        alert('Conta inválida')
        return
    }

    // Valida se a senha está correta
    if (contaAtual.senha !== senha){
        alert('Senha inválida');
        return
    }

    // Chamar a função correta de acordo com a operação
    switch (operacao) {
        case 'saque':
            sacar(contaAtual, valor)
            break;
        case 'deposito':
            depositar(contaAtual, valor)
            break;
        case 'saldo':
            consultarSaldo(contaAtual)
            break;
            default:
                alert('Operação inválida')
                break
    }
}

// Vinculando função ao evento de submit do form operação
formOperacao.addEventListener('submit', enviarFormularioOperacao);

// Desabilitar/ Habilitar campo de valor

// Obter select para adicionar evento de onChange
const operacao = document.getElementById('operacao');
operacao.addEventListener('change', (event) => {
    // Obter campo de valor do html
    const inputValor = document.getElementById('valor')

// Verifica se o valor selecionado é saldo
if (event.target.value === 'saldo') {
    // Desabilitar o campo
    inputValor.disabled = true;
    // Limpa o valor digitado
    inputValor.value = '';
    return;
}
// Habilita o campo quando a operação for diferente de saldo
})


