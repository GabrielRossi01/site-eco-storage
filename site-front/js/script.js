
// Função para validar o formulário de contato
function validarFormulario(event) {

    // Impede o comportamento padrão do formulário (envio e redirecionamento)
    event.preventDefault();

    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const mensagem = document.getElementById('mensagem');

    // Validação simples: verifica se algum campo está vazio
    if (nome.value.trim() === "" || email.value.trim() === "" || mensagem.value.trim() === "") {
        alert("Por favor, preencha todos os campos.");
    } else {

        // Exibe uma mensagem de sucesso
        alert("Mensagem enviada!");

        // Limpa os campos do formulário após o envio
        nome.value = "";
        email.value = "";
        mensagem.value = "";
    }
}

// Atribuindo o evento ao formulário
document.getElementById('form-contato').addEventListener('submit', validarFormulario);
