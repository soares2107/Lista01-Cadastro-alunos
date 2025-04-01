# 📘 Sistema de Cadastro de Alunos - DevTech Academy

Este projeto foi desenvolvido como parte do estudo de caso da disciplina Técnicas de Construção de Software do professor [@danielcorrea](https://github.com/danielcs-prof). 
Ele simula um sistema de gerenciamento de alunos em uma escola de programação fictícia, a **DevTech Academy**.

O sistema realiza operações de **cadastro, edição, exclusão, listagem e geração de relatórios** dos alunos, com uso de JavaScript puro e recursos modernos da linguagem.

---

## ✅ Funcionalidades Implementadas

### 🔹 Exercício 1: Formulário e Tabela (CRUD)

- Cadastro de aluno com os campos:
  - Nome
  - Idade
  - Curso (JavaScript, Python, Java)
  - Nota final
- Listagem em tabela com os dados inseridos
- Edição e exclusão de alunos diretamente na tabela
- Armazenamento em memória usando array de objetos

### 🔹 Exercício 2: Uso de Classe

- Refatoração do código para uso da classe `Aluno`
- Atributos: `nome`, `idade`, `curso`, `notaFinal`
- Métodos:
  - `isAprovado()` → retorna `true` se a nota for maior ou igual a 7
  - `toString()` → formata os dados do aluno em texto

### 🔹 Exercício 3: Eventos e Funções Modernas

- Uso de `addEventListener` nos botões do formulário e da tabela
- Funções anônimas e arrow functions aplicadas nas ações de clique
- Mensagens via `alert()` e `console.log()` nas ações de salvar, editar e excluir

### 🔹 Exercício 4: Relatórios com Programação Funcional

- Listagem de alunos aprovados (nota ≥ 7)
- Cálculo e exibição da média das notas finais
- Cálculo e exibição da média das idades
- Ordenação alfabética dos nomes
- Contagem de alunos por curso

---

## 🧪 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Docker (para containerizar a aplicação)
- Git + GitHub (para versionamento e colaboração)

---

## 🐳 Como Rodar com Docker

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/cadastro-alunos.git
cd cadastro-alunos
```

2. Construa a imagem Docker:

```bash
docker build -t cadastro-alunos .
```

3. Rode o contêiner:

```bash
docker run -d -p 8080:80 cadastro-alunos
```

4. Acesse no navegador:

```
http://localhost:8080
```

---

## 📝 Histórico de Versões

- **v1.0.1** — Versão completa com formulário, CRUD, classe Aluno e relatórios
- [Ver todas as tags](https://github.com/soares2107/Lista01-Cadastro-alunos/tags)

---

## 👨‍💻 Autor

**João Gabriel Soares**  
[GitHub](https://github.com/soares2107)

---

## ⚖️ Licença

Este projeto está licenciado sob a licença MIT.
