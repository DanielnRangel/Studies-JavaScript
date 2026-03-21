function calcular() {
  var num = document.querySelector("#num").value; //Valor do número inserido pelo usuário
  var tabuada = document.querySelector("#tabuada"); //Selecionar tabuada

  if (num == "") {
    //Verificação de campo vazio
    alert("ERRO: campo número vazio");
  } else {
    let n = Number(num);
    tabuada.innerHTML = ""; //Para limpar a tabuáda

    //Laço de repetição para realizar a tabuada.
    for (c = 1; c < 11; c++) {
      let item = document.createElement("option"); // Criando as options que vão conter as linhas da tabuada
      item.text = `${n} x ${c} = ${n * c}`;
      item.value = `tab${c}`; // Definindo um valor para o option. Pode ser utilizado com outras linguagens.
      tabuada.appendChild(item); // Adicionando as options dentro do select
    }
  }
}

// function calcular() {
//   var num = document.querySelector("#num").value;
//   var tab = document.querySelector("#tabuada");

//   if (num == "") {
//     alert("ERRO: O campo número está vazio.");
//   } else {
//     let n = Number(num);
//     tab.innerHTML = "";

//     for (let c = 1; c <= 10; c++) {
//       let item = document.createElement("option");
//       let res = c * n;
//       item.value = `tab ${c}`
//       item.text = `${c} x ${n} = ${res}`;
//       tab.appendChild(item);
//     }
//   }
// }
