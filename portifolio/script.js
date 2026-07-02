function enviarFormulario(event) {
    event.preventDefault(); // impede recarregar a página

    document.getElementById("mensagem").textContent = "Mensagem enviada com sucesso!";
}
