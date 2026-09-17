// Espera todo o HTML terminar de carregar
document.addEventListener("DOMContentLoaded", function () {
  // Procura o botão responsável pelo modo escuro
  const btnTema = document.getElementById("btnTema");

  // Procura o elemento body da página
  const body = document.body;

  // Verifica se existe uma preferência de tema salva
  const temaSalvo = localStorage.getItem("tema");

  // Se o usuário já escolheu o modo escuro anteriormente
  if (temaSalvo === "escuro") {
    // Adiciona a classe de modo escuro ao body
    body.classList.add("modo-escuro");
  }

  // Atualiza o ícone do botão
  function atualizarIcone() {
    // Verifica se o modo escuro está ativado
    const modoEscuro = body.classList.contains("modo-escuro");

    // Se o botão existir
    if (btnTema) {
      // No modo escuro mostra o sol
      if (modoEscuro) {
        btnTema.textContent = "☼";

        btnTema.setAttribute("aria-label", "Ativar modo claro");

        btnTema.setAttribute("title", "Ativar modo claro");
      }

      // No modo claro mostra a lua
      else {
        btnTema.textContent = "☾";

        btnTema.setAttribute("aria-label", "Ativar modo escuro");

        btnTema.setAttribute("title", "Ativar modo escuro");
      }
    }
  }

  // Atualiza o ícone assim que a página abre
  atualizarIcone();

  // Verifica se o botão existe
  if (btnTema) {
    // Cria a função executada ao clicar no botão
    btnTema.addEventListener("click", function () {
      // Ativa ou desativa o modo escuro
      body.classList.toggle("modo-escuro");

      // Verifica qual modo está ativo
      const modoEscuro = body.classList.contains("modo-escuro");

      // Salva a escolha do usuário
      if (modoEscuro) {
        localStorage.setItem("tema", "escuro");
      } else {
        localStorage.setItem("tema", "claro");
      }

      // Atualiza o ícone
      atualizarIcone();
    });
  }

  // Seleciona todos os links do menu
  const linksMenu = document.querySelectorAll(".navbar .nav-link");

  // Seleciona o menu mobile do Bootstrap
  const menu = document.getElementById("menuPrincipal");

  // Verifica se o menu existe
  if (menu) {
    // Cria o controlador do menu Bootstrap
    const menuBootstrap = bootstrap.Collapse.getOrCreateInstance(menu, {
      toggle: false,
    });

    // Adiciona evento em cada link
    linksMenu.forEach(function (link) {
      link.addEventListener("click", function () {
        // Verifica se a tela está no tamanho mobile
        if (window.innerWidth < 992) {
          // Fecha o menu depois de clicar
          menuBootstrap.hide();
        }
      });
    });
  }

  // Seleciona o formulário da página de contato
  const formulario = document.querySelector(".contact-form form");

  // Verifica se o formulário existe
  if (formulario) {
    // Impede que a página recarregue ao enviar
    formulario.addEventListener("submit", function (evento) {
      evento.preventDefault();

      // Exibe uma mensagem simples
      alert("Mensagem enviada com sucesso! 🐾");

      // Limpa os campos
      formulario.reset();
    });
  }
});
