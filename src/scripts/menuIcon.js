function alterarMenu() {
    const menu = document.getElementById('menu');
    const menuIcon = document.querySelector('.cabecalho__menu-toggle i');

    if (!menu || !menuIcon) return;

    menu.classList.toggle('cabecalho__menu--ativo');

    // Alterna o ícone entre 'bi-list' e 'bi-x'
    if (menu.classList.contains('cabecalho__menu--ativo')) {
        menuIcon.classList.remove('bi-list');
        menuIcon.classList.add('bi-x');
    } else {
        menuIcon.classList.remove('bi-x');
        menuIcon.classList.add('bi-list');
    }
}

function iniciarAlterarMenu() {
    const menuIcon = document.querySelector('.cabecalho__menu-toggle i');
    if (menuIcon) {
        menuIcon.addEventListener('click', alterarMenu);
    }
}

export default iniciarAlterarMenu;
