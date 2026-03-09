function country() {
  let pais = document.querySelector("input#origin");
  let txt = document.querySelector("div#teste");
  if (pais.value == "Brasil") {
    txt.innerHTML = "Você é Brasileiro!";
  } else {
    txt.innerHTML = "Você é estrangeiro.";
  }
}

function calcular() {
  var txtVel = document.querySelector("input#txtvel");
  var txt = document.querySelector("div#res");
  var vel = Number(txtVel.value);

  vel > 70
    ? (txt.innerHTML = "<p> Multado. </p>")
    : (txt.innerHTML = "<p> Dentro do limite. </p>");

  txt.innerHTML += "<p> Dirija com cuidado! </p>";
}
