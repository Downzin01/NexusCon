import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

async function carregarcarrossel() {
    try {
        const response = await fetch('./src/scripts/data.json');
        const data = await response.json();
        const carrosselContainer = document.getElementById('carrossel-container');

        if (!carrosselContainer) {
            console.error('Elemento #carrossel-container não encontrado.');
            return;
        }

        carrosselContainer.innerHTML = '';

        data.forEach((conteudo) => {
            const slide = document.createElement('div');
            slide.classList.add('swiper-slide');

            const bannerTexto = document.createElement('div');
            bannerTexto.classList.add('carrossel__banner-texto');

            const bannertitulo = document.createElement('h2');
            const bannerParagrafo = document.createElement('p');
            const bannerImagem = document.createElement('img');

            if (conteudo.tituloLogo) {
                bannerTexto.innerHTML = conteudo.tituloLogo;
                bannertitulo.innerHTML = conteudo.titulo;
            } else {
                bannertitulo.textContent = conteudo.titulo;
            }

            bannerParagrafo.textContent = conteudo.paragrafo;
            bannerImagem.src = conteudo.caminhoImagem;
            bannerImagem.alt = conteudo.altImagem || 'Imagem do evento';

            bannerTexto.appendChild(bannertitulo);
            bannerTexto.appendChild(bannerParagrafo);
            slide.appendChild(bannerTexto);
            slide.appendChild(bannerImagem);

            carrosselContainer.appendChild(slide);
        });

        const swiper = new Swiper('.swiper', {
            loop: true,
            speed: 2000,
            effect: 'slide',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                type: 'bullets',
            },
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
        });
    } catch (error) {
        alert('Ocorreu um erro na renderização do carrossel');
        console.error('Erro na renderização do carrossel:', error);
    }
}

export default carregarcarrossel;
