function calcular() {
  var num = document.querySelector("#num").value;
  var tab = document.querySelector("tabuada");

  if (num == "") {
    alert("ERRO: O campo número está vazio.");
  } else {
    let n = Number(num);
    tab.innerHTML = "";

    for (let c = 1; c <= 10; c++) {
      let item = document.createElement("option");
      let res = c * n;

      item.innerHTML = `${c} x ${n} = ${res}`;
      tab.appendChild(item);
    }
  }
}
