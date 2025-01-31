function validarDados() {
    // Dados Input Formulário - Jquerry Mask
    $('#telefone').mask('(00) 00000-0000');

    // Dado ano do footer
    document.getElementById('year').textContent = new Date().getFullYear();
}

export default validarDados;
