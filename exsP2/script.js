function carregar() {
  var agora = new Date();
  var hora = agora.getHours();
  // var hora = 10;
  var minutos = agora.getMinutes();
  var txt = document.querySelector("h3#fraseHora");
  var img = document.querySelector("img#imgP");
  var color = document.querySelector("section#sec");
  var txtDia = document.querySelector("h1#fraseDia");
  txt.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`;

  if (hora > 5 && hora < 12) {
    img.src = "imgs/fotoManha.jpg";
    color.style.background = "rgb(255, 200, 0)";
    txtDia.innerHTML = "Bom dia!";
  } else if (hora > 11 && hora < 18) {
    img.src = "imgs/fotoTarde.jpg";
    color.style.background = "orangered";
    txtDia.innerHTML = "Boa Tarde!";
  } else {
    img.src = "imgs/fotoNoite.jpg";
    color.style.background = "rgb(41, 7, 100)";
    txtDia.innerHTML = "Boa Noite!";
  }
}
