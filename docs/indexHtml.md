# NexusCon 2025 - Página Web

> Este projeto é uma página web responsiva para o evento **NexusCon 2025**, um evento geek que reúne animes, games e tecnologia. A página foi desenvolvida utilizando HTML, CSS (com Bootstrap) e JavaScript (com jQuery e Swiper).

<section align="center">
    <h2>📑 Documentação 📑</h2>
    <div>
        <a href="./docs/indexHtml.md">
            <img src="https://img.shields.io/static/v1?label=Pagina%20Incial&message=%20&color=f0f0f0&style=for-the-badge" />
        </a>
        <a href="./docs/styles.md">
            <img src="https://img.shields.io/static/v1?label=Estilizacao&message=%20&color=70a9ff&style=for-the-badge" />
        </a>
        <a href="./docs/scripts.md">
            <img src="https://img.shields.io/static/v1?label=Scripts&message=%20&color=70a9ff&style=for-the-badge" />
        </a>
    </div>
</section>

## Tecnologias Utilizadas
- **HTML5**: Estrutura da página.
- **CSS3**: Estilização da página.
  - **Bootstrap**: Framework CSS para estilização responsiva.
  - **Swiper**: Biblioteca para criar carrosséis.
  - **Bootstrap Icons**: Ícones utilizados na página.
- **JavaScript**: Funcionalidades da página.
  - **jQuery**: Manipulação do DOM.
  - **jQuery Mask**: Plugin para máscaras de entrada.

---

## Estrutura do Projeto

### `1.` **Cabeçalho**
O cabeçalho contém a logo, menu de navegação, botão de menu para dispositivos móveis e uma imagem de perfil.

- `<nav>`: Contém a barra de navegação com:
  - **Logo**: Link para a página inicial com a logo da NexusCon.
  - **Menu de Navegação**: Links para as seções da página (Home, Sobre, Cards, Contato).
  - **Botão de Menu**: Para dispositivos móveis, com um ícone de lista.
  - **Imagem de Perfil**: Uma imagem de perfil do usuário.

#### Código HTML:
```html
<header id="cabecalho">
    <nav class="cabecalho__container" id="navbar">
        <a
            href="https://downzin.com"
            class="cabecalho__logo"
            aria-label="Página inicial da NexusCon"
        >
            <img src="./src/images/LogoNexusCon.png" alt="Logo NexusCon 2025" />
        </a>
        <button class="cabecalho__menu-toggle" id="menu-botao" aria-label="Abrir menu">
            <i class="bi bi-list"></i>
        </button>
        <ul class="cabecalho__lista-menu" id="menu" role="navigation">
            <li class="cabecalho__menu"><a href="#">Home</a></li>
            <li class="cabecalho__menu"><a href="#sobre">Sobre</a></li>
            <li class="cabecalho__menu"><a href="#cards">Cards</a></li>
            <li class="cabecalho__menu"><a href="#contato">Contato</a></li>
        </ul>
        <div class="cabecalho__perfil" role="img" aria-label="Imagem de perfil do usuário">
            <a href="#">
                <img src="./src/images/perfil.jpg" alt="Perfil Usuario" />
            </a>
        </div>
    </nav>
</header>
```

### `2.` **Carrossel**
O carrossel utiliza a biblioteca Swiper para exibir slides com imagens e textos descritivos sobre o evento.

- Utiliza a biblioteca Swiper para criar um carrossel de imagens.
- Cada slide contém uma imagem de fundo e um texto descritivo sobre o evento.

#### Código HTML:
```html
<section class="carrossel swiper">
    <div class="swiper-wrapper" id="carrossel-container"></div>
    <div class="swiper-pagination"></div>
</section>
```

### `3.` **Sobre**
A seção "Sobre" contém uma imagem ilustrativa e um texto descritivo sobre o evento.

- Apresenta uma imagem ilustrativa e um texto descritivo sobre a NexusCon.

#### Código HTML:
```html
<section class="sobre container my-5" id="sobre">
    <article class="row">
        <figure class="col-md-6 sobre__imagem">
            <img src="./src/images/figure.jpg" alt="Imagem ilustrativa do evento" />
        </figure>
        <div class="col-md-6 sobre__texto">
            <h2 class="fw-bold">Sobre a NexusCon</h2>
            <p class="mb-3">
                A NexusCon é o evento definitivo para os apaixonados por animes, games,
                cultura geek e tecnologia. Inspirada em grandes convenções como a CCXP e
                a BGS, a NexusCon oferece uma experiência única, com exposições,
                painéis, cosplay, torneios de games e muito mais. Junte-se a nós para
                vivenciar um universo imersivo, onde o melhor do entretenimento e da
                tecnologia se encontram em um só lugar.
            </p>
            <p class="mb-3">
                Com atrações exclusivas, convidados especiais e o lançamento de novos
                produtos e jogos, a NexusCon é o ponto de encontro para todos os fãs da
                cultura geek. Se você é fã de animes, games ou tecnologia, a NexusCon é
                o evento que você não pode perder. Prepare-se para se conectar com
                outros entusiastas e viver momentos inesquecíveis!
            </p>
        </div>
    </article>
</section>
```

### `4.` **Cards**
A seção "Cards" exibe três cards com informações sobre cosplays, painéis/palestras e expositores.

- Exibe três cards com informações sobre:
     - Cosplays incríveis.
     - Painéis e palestras exclusivas.
     - Expositores e lançamentos.

#### Código HTML:
```html
<section class="container-xxl" id="cards">
    <div class="card-container">
        <article class="card">
            <img src="./src/images/card-1.jpg" alt="Cosplay no evento NexusCon" />
            <div class="card-conteudo">
                <h3>Cosplay Incríveis</h3>
                <p>
                    A NexusCon é o palco perfeito para os melhores cosplays do Brasil!
                    Venha conferir as fantasias mais criativas e se encantar com as
                    performances dos participantes. Cada edição traz uma nova onda de
                    personagens e referências do universo geek e nerd.
                </p>
            </div>
        </article>
        <article class="card">
            <img src="./src/images/card-2.jpg" alt="Painéis e palestras no NexusCon" />
            <div class="card-conteudo">
                <h3>Painéis e Palestras Exclusivas</h3>
                <p>
                    Prepare-se para conversar com os maiores nomes do mundo geek! A
                    NexusCon oferece uma série de painéis e palestras com artistas,
                    produtores e especialistas em animes, games e tecnologia. Fique por
                    dentro das últimas tendências e novidades do universo geek.
                </p>
            </div>
        </article>
        <article class="card">
            <img
                src="./src/images/card-3.jpg"
                alt="Expositores de tecnologia no NexusCon"
            />
            <div class="card-conteudo">
                <h3>Expositores e Lançamentos</h3>
                <p>
                    A NexusCon reúne grandes expositores de tecnologia, jogos e cultura
                    pop. Venha descobrir novos produtos, lançamentos de games e muito
                    mais! É o lugar ideal para quem quer se conectar com as marcas que
                    moldam o futuro da indústria geek.
                </p>
            </div>
        </article>
    </div>
</section>
```

### `5.` **Contato**
A seção "Contato" contém um formulário de contato e um mapa incorporado do Google Maps.

- Contém um formulário de contato com campos para nome, e-mail, telefone, assunto e mensagem.
- Inclui um mapa incorporado do Google Maps.

#### Código HTML:
```html
<section class="container my-5" id="contato">
    <div class="row row-cols-1 row-cols-md-2 align-items-center">
        <article class="col-md-6 p-3 formulario-container">
            <h2>Contato</h2>
            <form class="formulario" id="formulario" method="POST">
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Digite seu nome"
                    required
                />

                <div class="row">
                    <div class="col-md-8">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Digite seu Email"
                            required
                        />
                    </div>
                    <div class="col-md-4">
                        <input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            placeholder="Telefone"
                            required
                        />
                    </div>
                </div>

                <input
                    type="text"
                    id="assunto"
                    name="assunto"
                    placeholder="Qual assunto?"
                    required
                />

                <textarea
                    id="mensagem"
                    name="mensagem"
                    placeholder="Digite sua mensagem"
                    required
                ></textarea>

                <div class="btn-formulario">
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </article>

        <article class="col-md-6 text-center local__container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117063.46164106736!2d-46.73900123753356!3d-23.52411436047807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59b9fbe36481%3A0x1dd5192dce59d497!2sDistrito%20Anhembi!5e0!3m2!1spt-PT!2sbr!4v1738125631989!5m2!1spt-PT!2sbr"
                width="600"
                height="400"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                aria-label="Localização no mapa"
            ></iframe>
        </article>
    </div>
</section>
```

### `6.` **Rodapé**
O rodapé contém links para informações, expositores, patrocinadores e contato, além de uma seção de direitos autorais.

- Dividido em quatro colunas com links para:
   - Informações sobre o evento.
   - Expositores.
   - Patrocinadores.
   - Contato.
- Inclui uma seção de direitos autorais.

#### Código HTML:
```html
<footer class="footer text-white pt-5">
    <div class="container">
        <div class="footer-container row row-cols-1 row-cols-sm-2 row-cols-md-4">
            <section class="col mb-4">
                <h4>INFORMAÇÕES</h4>
                <nav>
                    <ul class="list-unstyled mt-2">
                        <li class="mb-2">
                            <a
                                class="footer-menu"
                                href="#"
                                class="text-white text-decoration-none"
                            >
                                Sobre o Evento
                            </a>
                        </li>
                        <li class="mb-2">
                            <a
                                class="footer-menu"
                                href="#"
                                class="text-white text-decoration-none"
                            >
                                Ingressos
                            </a>
                        </li>
                        <li class="mb-2">
                            <a
                                class="footer-menu"
                                href="#"
                                class="text-white text-decoration-none"
                            >
                                Atrações
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>
            <section class="col mb-4">
                <h4 class="fw-bold">EXPOSITORES</h4>
                <nav>
                    <ul class="list-unstyled mt-2">
                        <li class="mb-2">
                            <a
                                class="footer-menu"
                                href="#"
                                class="text-white text-decoration-none"
                            >
                                Expositores Confirmados
                            </a>
                        </li>
                        <li class="mb-2">
                            <a
                                class="footer-menu"
                                href="#"
                                class="text-white text-decoration-none"
                            >
                                Inscrição para Expositores
                            </a>
                        </li>
                        <li class="mb-2">
                            <a
                                class="footer-menu"
                                href="#"
                                class="text-white text-decoration-none"
                            >
                                Espaços Disponíveis
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>
            <section class="col mb-4">
                <h4 class="fw-bold">PATROCINADORES</h4>
                <nav>
                    <ul class="list-unstyled mt-2">
                        <li class="mb-2">
                            <a
                                class="footer-menu"
                                href="#"
                                class="text-white text-decoration-none"
                            >
                                Patrocinadores Oficiais
                            </a>
                        </li>
                        <li class="mb-2">
                            <a
                                class="footer-menu"
                                href="#"
                                class="text-white text-decoration-none"
                            >
                                Como Patrocinar
                            </a>
                        </li>
                        <li class="mb-2">
                            <a
                                class="footer-menu"
                                href="#"
                                class="text-white text-decoration-none"
                            >
                                Pacotes de Patrocínio
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>
            <section class="col mb-4">
                <h4 class="fw-bold">CONTATO</h4>
                <nav>
                    <ul class="list-unstyled mt-2">
                        <li class="mb-2">
                            <a
                                class="footer-menu"
                                href="#"
                                class="text-white text-decoration-none"
                            >
                                Fale Conosco
                            </a>
                        </li>
                        <li class="mb-2">
                            <a
                                class="footer-menu"
                                href="#"
                                class="text-white text-decoration-none"
                            >
                                Suporte ao Cliente
                            </a>
                        </li>
                        <li class="mb-2">
                            <a
                                class="footer-menu"
                                href="#"
                                class="text-white text-decoration-none"
                            >
                                Redes Sociais
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>
        </div>

        <section class="footer-copy mt-5">
            <p>
                &copy; NexusCon
                <span id="year"></span>
                . Todos os direitos reservados.
                <br />
                Este conteúdo é fornecido exclusivamente para fins educacionais e
                acadêmicos, visando a disseminação de conhecimento.
            </p>
        </section>
    </div>
</footer>
```

### `7.` **Scripts**
Os scripts incluem jQuery, jQuery Mask e um script personalizado (main.js).

#### Código HTML:
```html
<script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js"></script>
<script type="module" src="./src/scripts/main.js"></script>
```

---

## 📜 Licença

Este projeto é licenciado sob a **Licença Educacional NexusCon**.  
Você é livre para utilizar, modificar e compartilhar este código para fins educacionais e acadêmicos.

### ✅ Permissões
- **Compartilhamento**: Pode compartilhar o código livremente.
- **Uso Educacional**: Pode usar em aulas, workshops e projetos acadêmicos.
- **Modificações**: Pode adaptar o código para suas necessidades.

### 📄 Texto da Licença
```plaintext
Copyright (c) 2025 NexusCon. Todos os direitos reservados.

Este projeto é fornecido "como está", sem garantias de qualquer tipo. 
O autor não se responsabiliza por danos diretos, indiretos ou consequenciais 
decorrentes do uso deste código.
```

---

## 🌟 Apoie o Projeto
Se você gostou deste projeto e quer apoiar o desenvolvimento de mais conteúdos como este, considere:

- ⭐ **Dar** uma estrela no repositório.
- 🐛 **Reportar bugs** ou sugerir melhorias.
- 💬 **Compartilhar** com amigos e colegas.

---

Desenvolvido com ❤️ por Downzin
- 🌐 **Website**: [downzin.com](https://downzin.com/)
- 📧 **Contato**: [Email](mailto:dantasmatheus001@gmail.com)
- 🐙 **GitHub**: [Downzin](github.com/Downzin01)
- 💬 **Discord**: [Downzin](https://discord.com/users/576935681167982595)