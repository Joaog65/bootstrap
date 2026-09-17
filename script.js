
// Espera o HTML terminar de carregar antes de executar o JavaScript.
document.addEventListener("DOMContentLoaded", () => {


    // Procura o botão responsável por trocar o tema.
    const botaoTema = document.getElementById("btnTema");


    // Procura o elemento que mostra a lua ou o sol.
    const iconeTema = document.getElementById("iconeTema");


    // Procura o tema salvo anteriormente no navegador.
    const temaSalvo = localStorage.getItem("tema");


    // Verifica se o usuário escolheu o modo escuro anteriormente.
    if (temaSalvo === "escuro") {

        // Adiciona a classe responsável pelo modo escuro.
        document.body.classList.add("modo-escuro");

    }


    // Atualiza o ícone quando a página é carregada.
    atualizarIcone();


    // Detecta quando o usuário clica no botão de tema.
    botaoTema.addEventListener("click", alternarTema);


    // Cria a função responsável por alternar entre os temas.
    function alternarTema() {

        // Adiciona ou remove a classe do modo escuro.
        document.body.classList.toggle("modo-escuro");


        // Verifica se o modo escuro está ativo.
        const modoEscuroAtivo =
            document.body.classList.contains("modo-escuro");


        // Salva a preferência do usuário no navegador.
        localStorage.setItem(
            "tema",
            modoEscuroAtivo ? "escuro" : "claro"
        );


        // Atualiza o ícone da lua ou do sol.
        atualizarIcone();

    }


    // Cria a função que controla o ícone do botão.
    function atualizarIcone() {

        // Verifica se o modo escuro está ativo.
        const modoEscuroAtivo =
            document.body.classList.contains("modo-escuro");


        // Mostra o sol no modo escuro.
        if (modoEscuroAtivo) {

            // Coloca um sol minimalista no botão.
            iconeTema.textContent = "☼";

        } else {

            // Coloca uma lua minimalista no botão.
            iconeTema.textContent = "☾";

        }


        // Atualiza a descrição para leitores de tela.
        botaoTema.setAttribute(
            "aria-label",
            modoEscuroAtivo
                ? "Ativar modo claro"
                : "Ativar modo escuro"
        );


        // Atualiza a descrição exibida ao passar o mouse.
        botaoTema.setAttribute(
            "title",
            modoEscuroAtivo
                ? "Modo claro"
                : "Modo escuro"
        );

    }


    // Seleciona todos os links da navbar.
    const linksNavbar =
        document.querySelectorAll(".nav-link");


    // Percorre cada link encontrado.
    linksNavbar.forEach((link) => {

        // Detecta quando um link é clicado.
        link.addEventListener("click", () => {

            // Procura o menu responsivo do Bootstrap.
            const menu =
                document.getElementById("menuPrincipal");


            // Verifica se o menu está aberto.
            if (menu.classList.contains("show")) {

                // Cria uma instância do componente Collapse.
                const menuBootstrap =
                    bootstrap.Collapse.getInstance(menu);


                // Fecha o menu no celular.
                if (menuBootstrap) {

                    menuBootstrap.hide();

                }

            }

        });

    });

});