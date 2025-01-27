document.addEventListener("DOMContentLoaded", () => {
  // Controle de navegação
  document.getElementById("menu-dashboard").addEventListener("click", () => {
    alert("Tela Dashboard - Em desenvolvimento!");
  });

  document.getElementById("menu-upload").addEventListener("click", () => {
    document.getElementById("upload").style.display = "block";
    document.getElementById("meus-arquivos").style.display = "none";
  });

  document.getElementById("menu-arquivos").addEventListener("click", () => {
    document.getElementById("meus-arquivos").style.display = "block";
    document.getElementById("upload").style.display = "none";
  });

  // Exibição de formulários de login e registro
  document.getElementById("link-registro").addEventListener("click", () => {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("registro-form").style.display = "block";
  });

  document.getElementById("link-login").addEventListener("click", () => {
    document.getElementById("registro-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
  });

  // Formulário de upload
  document.getElementById("form-upload").addEventListener("submit", (e) => {
    e.preventDefault();
    let nomeArquivo = document.getElementById("arquivo").files[0].name;
    let cadeira = document.getElementById("cadeira").value;
    let turma = document.getElementById("turma").value;

    // Adiciona o arquivo à lista de arquivos
    let tabela = document
      .getElementById("tabela-arquivos")
      .getElementsByTagName("tbody")[0];
    let novaLinha = tabela.insertRow();
    novaLinha.innerHTML = `
          <td>${nomeArquivo}</td>
          <td>${cadeira}</td>
          <td>${turma}</td>
          <td><button>Download</button></td>
        `;
  });
});
