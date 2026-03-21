function contar() {
  //Variáveis a serem utilizadas no for
  var de = document.querySelector("#de").value;
  var ate = document.querySelector("#ate").value;
  var passo = document.querySelector("#passo").value;
  var res = document.querySelector("#res");

  //Limpar campo resposta quando clicarem novamente no botão
  res.innerHTML = "";

  //alert(`${de}, ${ate}, ${passo}, ${res}`);

  //if-else para verificar campos vazios e evitar erros.
  if (de == "") {
    alert("ERRO: Campo início vazio.");
  } else if (ate == "") {
    alert("ERRO: Campo fim vazio.");
  } else if (passo == "" || Number(passo) <= 0) {
    alert("ERRO: Campo passo vazio ou igual ou inferior a zero.");
  } else {
    //Declaracão de variáveis contendo os valores em number.
    let ini = Number(de);
    let fim = Number(ate);
    let p = Number(passo);

    if (ini > fim) {
      for (var c = ini; c >= fim; c -= p) {
        res.innerHTML = `👉 ${c}`;
      }
    } else {
      //For para exibir os números de acordo com os parâmetros iseridos pelo usuário.
      for (var c = ini; c <= fim; c += p) {
        res.innerHTML += ` 👉 ${c}`;
        // alert(c);
      }
      res.innerHTML += ` 👉 🏁 `;
    }
  }
}
