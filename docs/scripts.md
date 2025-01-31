# Projeto de Site Moderno com Interatividade
> Este projeto é um site moderno e interativo, com funcionalidades como um carrossel dinâmico, menu responsivo, validação de formulário e integração com Discord via webhook. Abaixo está uma explicação detalhada de cada parte do código.

<section align="center">
    <h2>📑 Documentação 📑</h2>
    <div>
        <a href="./docs/indexHtml.md">
            <img src="https://img.shields.io/static/v1?label=Pagina%20Incial&message=%20&color=f0f0f0&style=for-the-badge" />
        </a>
        <a href="./docs/indexHtml.md">
            <img src="https://img.shields.io/static/v1?label=Pagina%20Incial&message=%20&color=70a9ff&style=for-the-badge" />
        </a>
        <a href="./docs/styles.md">
            <img src="https://img.shields.io/static/v1?label=Estilizacao&message=%20&color=70a9ff&style=for-the-badge" />
        </a>
    </div>
</section>

---

## Estrutura do Projeto

O projeto é organizado em vários arquivos JavaScript, cada um responsável por uma funcionalidade específica:

1. **`carregarCarrossel.js`**: Carrega e renderiza o carrossel dinâmico.
2. **`main.js`**: Arquivo principal que inicializa todas as funcionalidades.
3. **`menuIcon.js`**: Controla o menu responsivo e a alternância de ícones.
4. **`scrollCabecalho.js`**: Adiciona efeitos ao cabeçalho ao rolar a página.
5. **`validarDados.js`**: Valida e formata dados do formulário.
6. **`validarFormulario.js`**: Valida o formulário e envia os dados para um webhook do Discord.

---

## Explicação do Código

### `1.` **Carregar Carrossel (`carregarCarrossel.js`)**
Este script carrega dados de um arquivo JSON (`data.json`) e renderiza um carrossel dinâmico usando a biblioteca **Swiper**.

**Funcionalidades:**
- **Fetch API**: Busca os dados do carrossel de um arquivo JSON.
- **Renderização Dinâmica**: Cria slides com base nos dados recebidos.
- **Swiper**: Configura o carrossel com autoplay, loop e paginação.

**Exemplo de Estrutura do JSON:**
```json
[
    {
        "id": 1,
        "tituloLogo": "<span class=\"texto-gradiente\"><strong>NEXUS</strong>CON25</span>",
        "titulo": "O Evento Geek do Ano!",
        "paragrafo": "Anime, games e tecnologia em um só lugar! Junte-se à NexusCon 2025 e viva a experiência geek definitiva com cosplays incríveis, torneios e muito mais.",
        "caminhoImagem": "./src/images/banner-1.jpg"
    },
    {
        "id": 2,
        "titulo": "Torneios e Competição de Games",
        "paragrafo": "Desafie seus amigos e participe de emocionantes torneios de games! A NexusCon oferece uma programação repleta de competições de jogos populares, com prêmios incríveis e muita diversão.",
        "caminhoImagem": "./src/images/banner-2.jpg"
    },
    {
        "id": 3,
        "titulo": "Tecnologia e Inovação Geek",
        "paragrafo": "Explore as últimas inovações tecnológicas com uma abordagem geek! A NexusCon traz o que há de mais novo em gadgets, dispositivos e novidades da indústria tech, tudo com um toque nerd.",
        "caminhoImagem": "./src/images/banner-3.jpg"
    }
]

```

### `2.` **Arquivo Principal (`main.js`)**
Este script inicializa todas as funcionalidades do site.

**Funcionalidades:**
- Carrega o carrossel ao carregar a página.
- Inicializa o menu responsivo.
- Adiciona um listener para o evento de scroll.
- Valida e envia o formulário.

### `3.` **Menu Responsivo (`menuIcon.js`)**
Controla a exibição do menu em dispositivos móveis.

**Funcionalidades:**
- Alterna entre os ícones de menu (`bi-list` e `bi-x`).
- Adiciona/remove a classe `cabecalho__menu--ativo` para mostrar/esconder o menu.

### `4.` **Efeito de Scroll no Cabeçalho (`scrollCabecalho.js`)**
Adiciona uma classe ao cabeçalho quando o usuário rola a página.

**Funcionalidades:**
- Adiciona a classe `cabecalho__scroll-active` ao cabeçalho quando o scroll é maior que 50 pixels.

### `5.` **Validação de Dados (`validarDados.js`)**
Valida e formata os dados do formulário.

**Funcionalidades:**
- Aplica uma máscara para o campo de telefone usando `jQuery Mask`.
- Atualiza o ano no rodapé automaticamente.

### `6.` **Validação de Formulário (`validarFormulario.js`)**
Valida os campos do formulário e envia os dados para um webhook do Discord.

**Funcionalidades:**
- Valida campos obrigatórios (nome, e-mail, telefone, assunto, mensagem).
- Verifica o formato do e-mail com uma expressão regular.
- Envia os dados para um webhook do Discord usando `Fetch API`.
- Exibe uma mensagem de sucesso ou erro ao usuário.

### Estrutura da Mensagem do Discord

```json
{
    "content": "Novo formulário enviado!",
    "embeds": [
        {
            "title": "Detalhes do Formulário",
            "description": "**Nome:** João\n**Email:** joao@example.com\n**Telefone:** (11) 98765-4321\n**Assunto:** Dúvida",
            "color": 0x5dade2,
            "fields": [
                {
                    "name": "Mensagem",
                    "value": "Olá, tenho uma dúvida sobre o evento."
                }
            ]
        }
    ]
}
```

## Como Usar

### **Estrutura HTML**
- Certifique-se de que o HTML esteja estruturado corretamente, com os IDs e classes correspondentes aos scripts.

### **Importação dos Scripts**
- No arquivo HTML, importe os scripts na ordem correta.
```html
<script type="module" src="./src/scripts/main.js"></script>
```

### **Dependências**
- Adicione as bibliotecas necessárias, como **Swiper** e **jQuery Mask**, via **CDN**.
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js"></script>
```

### **Webhook do Discord**
- Substitua a URL do webhook no arquivo `validarFormulario.js` pela sua própria URL.

---

## 💥 Conclusão
Este projeto é altamente personalizável e pode ser adaptado para diferentes tipos de sites. A estrutura modular dos scripts facilita a manutenção e a expansão do código. Sinta-se à vontade para usar e modificar conforme suas necessidades!

```bash
# Nota: 
Certifique-se de testar o site em diferentes dispositivos e navegadores para garantir a compatibilidade e a responsividade.
```

Espero que isso ajude! Se precisar de mais detalhes ou ajustes, é só pedir. 😊