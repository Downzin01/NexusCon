import carregarCarousel from './carregarCarrossel.js';
import iniciarAlterarMenu from './menuIcon.js';
import scrollCabecalho from './scrollCabecalho.js';
import validarDados from './validarDados.js';
import validarFormulario from './validarFormulario.js';

document.addEventListener('DOMContentLoaded', () => {
    carregarCarousel();
    iniciarAlterarMenu();
    validarDados();

    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', validarFormulario);
});

document.addEventListener('scroll', () => {
    scrollCabecalho();
});
