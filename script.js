// Função para validar o formulário
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        alert("Mensagem enviada com sucesso!");
    }
});
