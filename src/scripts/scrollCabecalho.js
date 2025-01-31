async function scrollCabecalho() {
    const navBar = document.getElementById('navbar');

    window.scrollY >= 50
        ? navBar.classList.add('cabecalho__scroll-active')
        : navBar.classList.remove('cabecalho__scroll-active');
}

export default scrollCabecalho;
