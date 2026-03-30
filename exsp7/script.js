let arr = [];

function add() {
  var num = document.querySelector("#num"); //Pegando o número inserido pelo usuário em formato de texto
  var vet = document.querySelector("#vetor"); //Acessa o elemento html
  var n = Number(num.value);
  num.value = "";
  num.focus();

  if (num == "") {
    alert("ERRO: campo número vazio");
    return;
  }

  if (n < 1 || n > 100) {
    alert("ERRO: insira um número entre 1 e 100");
    return;
  }

  if (arr.includes(n)) {
    alert("ERRO: Esse número ja foi adicionado.");
    return;
  }

  let item = document.createElement("option");

  item.text = `Valor ${n} adicionado.`;
  vet.appendChild(item);
  arr.push(n);
}

function finalizar() {
  if (arr.length < 1) {
    alert("ERRO: sem números adicionados.");
    return;
  }
  // alert("chegou na função finalizar");
  let res = document.querySelector("#res");
  let p1 = document.createElement("p");
  let maior = Math.max(...arr);
  let menor = Math.min(...arr);
  let soma = arr.reduce((acc, val) => acc + val, 0);
  let media = soma / arr.length;

  let texto = `
  Ao todo, temos ${arr.length} números. <br/>
  O maior valor informado foi: ${maior}. <br/>
  O menor valor informado foi: ${menor}. <br/>
  Somando todos os valores temos: ${soma}. <br/>
  A média dos valores inseridos é: ${media.toFixed(2).replace(".", ",")}.`;

  res.innerHTML = "";
  p1.innerHTML = texto;
  res.appendChild(p1);
}

function limpar() {
  let vet = document.querySelector("#vetor");
  let res = document.querySelector("#res");
  vet.innerHTML = "";
  res.innerHTML = "";
  arr = [];
}
