class Aluno {
  constructor(nome, idade, curso, notaFinal) {
    this.nome = nome;
    this.idade = idade;
    this.curso = curso;
    this.notaFinal = notaFinal;
  }

  isAprovado() {
    return this.notaFinal >= 7;
  }

  toString() {
    return `${this.nome}, ${this.idade} anos, curso de ${this.curso}, nota: ${this.notaFinal}`;
  }
}

const alunos = [];
let editandoIndex = -1;

const form = document.getElementById("formAluno");
const tabela = document.querySelector("#tabelaAlunos tbody");

// Evento de submit com função anônima
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const idade = parseInt(document.getElementById("idade").value);
  const curso = document.getElementById("curso").value;
  const nota = parseFloat(document.getElementById("nota").value);

  if (nota < 0 || nota > 10) {
    alert("A nota deve estar entre 0 e 10.");
    return;
  }

  const aluno = new Aluno(nome, idade, curso, nota);

  if (editandoIndex === -1) {
    alunos.push(aluno);
    alert("Aluno cadastrado com sucesso!");
    console.log("Aluno salvo:", aluno.toString());
  } else {
    alunos[editandoIndex] = aluno;
    alert("Aluno editado com sucesso!");
    console.log("Aluno editado:", aluno.toString());
    editandoIndex = -1;
  }

  form.reset();
  renderizarTabela();
});

// Função para renderizar usando arrow function
const renderizarTabela = () => {
  tabela.innerHTML = "";

  alunos.forEach((aluno, index) => {
    const linha = document.createElement("tr");

    linha.innerHTML = `
      <td>${aluno.nome}</td>
      <td>${aluno.idade}</td>
      <td>${aluno.curso}</td>
      <td>${aluno.notaFinal} (${aluno.isAprovado() ? "Aprovado" : "Reprovado"})</td>
      <td>
        <button class="btn-editar">Editar</button>
        <button class="btn-excluir">Excluir</button>
      </td>
    `;

    tabela.appendChild(linha);

    // Eventos com funções anônimas nos botões
    linha.querySelector(".btn-editar").addEventListener("click", function () {
      editarAluno(index);
    });

    linha.querySelector(".btn-excluir").addEventListener("click", function () {
      excluirAluno(index);
    });
  });
};

// Arrow function para editar
const editarAluno = (index) => {
  const aluno = alunos[index];
  document.getElementById("nome").value = aluno.nome;
  document.getElementById("idade").value = aluno.idade;
  document.getElementById("curso").value = aluno.curso;
  document.getElementById("nota").value = aluno.notaFinal;
  editandoIndex = index;
};

// Arrow function para excluir
const excluirAluno = (index) => {
  const alunoRemovido = alunos.splice(index, 1)[0];
  alert("Aluno excluído com sucesso!");
  console.log("Aluno excluído:", alunoRemovido.toString());
  renderizarTabela();
};
