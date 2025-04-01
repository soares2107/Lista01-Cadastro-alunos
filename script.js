const alunos = [];
let editandoIndex = -1;

const form = document.getElementById("formAluno");
const tabela = document.querySelector("#tabelaAlunos tbody");

form.onsubmit = function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const idade = parseInt(document.getElementById("idade").value);
  const curso = document.getElementById("curso").value;
  const nota = parseFloat(document.getElementById("nota").value);

  const aluno = { nome, idade, curso, nota };

  if (editandoIndex === -1) {
    alunos.push(aluno);
  } else {
    alunos[editandoIndex] = aluno;
    editandoIndex = -1;
  }

  form.reset();
  renderizarTabela();
};

function renderizarTabela() {
  tabela.innerHTML = "";

  alunos.forEach((aluno, index) => {
    const linha = document.createElement("tr");

    linha.innerHTML = `
      <td>${aluno.nome}</td>
      <td>${aluno.idade}</td>
      <td>${aluno.curso}</td>
      <td>${aluno.nota}</td>
      <td>
        <button onclick="editarAluno(${index})">Editar</button>
        <button onclick="excluirAluno(${index})">Excluir</button>
      </td>
    `;

    tabela.appendChild(linha);
  });
}

function editarAluno(index) {
  const aluno = alunos[index];

  document.getElementById("nome").value = aluno.nome;
  document.getElementById("idade").value = aluno.idade;
  document.getElementById("curso").value = aluno.curso;
  document.getElementById("nota").value = aluno.nota;

  editandoIndex = index;
}

function excluirAluno(index) {
  alunos.splice(index, 1);
  renderizarTabela();
}
