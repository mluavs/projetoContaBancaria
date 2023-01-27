// Criar variável para armazenar lista de contas
let contas = [];


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

    contas.push(contaCriada);
    alert(`Conta criada com sucesso. Número: ${conta}`)
}

// Vincular função ao evento de submit do formulário
formulario.addEventListener('submit', enviarFormulario)

